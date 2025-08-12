import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";

interface FilterState {
    postDateRange: string;
    selectedLocations: string[];
    industries: string[];
    selectedJobFunctions: string[];
    jobSubfunctions: string[];
    salaryMin: number;
    salaryMax: number;
    EmploymentType: string[];
}

const defaultFilters: FilterState = {
    postDateRange: "",
    selectedLocations: [],
    industries: [],
    selectedJobFunctions: [],
    jobSubfunctions: [],
    salaryMin: 0,
    salaryMax: 10000,
    EmploymentType: [],
};

export const useFilterState = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const currentPath = usePathname();

    // Parse URL params to filter state
    const parseFiltersFromURL = useCallback((): FilterState => ({
        postDateRange: searchParams.get("postDateRange") || "",
        selectedLocations: searchParams.get("locations")?.split(",").filter(Boolean) || [],
        industries: searchParams.get("industries")?.split(",").filter(Boolean) || [],
        selectedJobFunctions: searchParams.get("jobFunctions")?.split(",").filter(Boolean) || [],
        jobSubfunctions: searchParams.get("jobSubfunctions")?.split(",").filter(Boolean) || [],
        salaryMin: parseInt(searchParams.get('salaryMin') || '0'),
        salaryMax: parseInt(searchParams.get('salaryMax') || '10000'),
        EmploymentType: searchParams.get("employment_type")?.split(",").filter(Boolean) || [],
    }), [searchParams]);

    const [filterValues, setFilterValues] = useState<FilterState>(parseFiltersFromURL);

    // Sync with URL changes
    useEffect(() => {
        setFilterValues(parseFiltersFromURL());
    }, [parseFiltersFromURL]);

    // Generic update function
    const updateFilter = useCallback(<K extends keyof FilterState>(
        key: K,
        value: FilterState[K]
    ) => {
        setFilterValues(prev => ({ ...prev, [key]: value }));
    }, []);

    // Reset specific filter
    const resetFilter = useCallback((filterName: string) => {
        const params = new URLSearchParams(searchParams.toString());

        switch (filterName) {
            case "Post Date Range":
                updateFilter("postDateRange", "");
                params.delete("postDateRange");
                break;
            case "Location":
                updateFilter("selectedLocations", []);
                params.delete("locations");
                break;
            case "Industries":
                updateFilter("industries", []);
                params.delete("industries");
                break;
            case "Job Role":
                updateFilter("selectedJobFunctions", []);
                updateFilter("jobSubfunctions", []);
                params.delete("jobFunctions");
                params.delete("jobSubfunctions");
                break;
            case "Salary Range":
                updateFilter("salaryMin", 0);
                updateFilter("salaryMax", 10000);
                params.delete("salaryMin");
                params.delete("salaryMax");
                break;
            case "Employment Type":
                updateFilter("EmploymentType", []);
                params.delete("employment_type");
                break;
        }

        router.push(`${currentPath}?${params.toString()}`);
    }, [searchParams, updateFilter, router, currentPath]);

    // Apply all filters
    const applyFilters = useCallback(() => {
        const queryParams = new URLSearchParams();

        // Helper to add non-empty values
        const addParam = (key: string, value: string | string[] | number) => {
            if (Array.isArray(value) && value.length > 0) {
                queryParams.set(key, value.join(","));
            } else if (typeof value === "string" && value) {
                queryParams.set(key, value);
            } else if (typeof value === "number" && value !== defaultFilters[key as keyof FilterState]) {
                queryParams.set(key, value.toString());
            }
        };

        addParam("postDateRange", filterValues.postDateRange);
        addParam("locations", filterValues.selectedLocations);
        addParam("jobFunctions", filterValues.selectedJobFunctions);
        addParam("jobSubfunctions", filterValues.jobSubfunctions);
        addParam("industries", filterValues.industries);
        addParam("employment_type", filterValues.EmploymentType);
        addParam("salaryMin", filterValues.salaryMin);
        addParam("salaryMax", filterValues.salaryMax);

        router.push(`/jobs?${queryParams.toString()}`);
    }, [filterValues, router]);

    return {
        filterValues,
        updateFilter,
        resetFilter,
        applyFilters,
    };
};