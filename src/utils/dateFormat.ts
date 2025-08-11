import { format } from "date-fns";

export const toDisplayValue = (
    value: string | number | Date | null | undefined
) => {
    if (value instanceof Date) {
        return format(value, "MMMM d, yyyy");
    }
    if (typeof value === "string" && !isNaN(Date.parse(value))) {
        return format(new Date(value), "MMMM d, yyyy");
    }
    return value ?? "None";
};