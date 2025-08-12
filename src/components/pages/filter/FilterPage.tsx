import React, { useState } from "react";
import { FunctionComponent } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  ThemeProvider,
  DialogActions,
  Dialog,
} from "@mui/material";
import theme from "enigma/styles/theme";
import Image from "next/image";
import { Close, ArrowDropDown } from "@mui/icons-material";
import DatePickerMenu from "enigma/components/sections/filter/DatePickerMenu";
import LocationFilter from "enigma/components/sections/filter/LocationFilter";
import Industries from "enigma/components/sections/filter/Industries";
import JobRoleFilter from "enigma/components/sections/filter/JobRoleFilter";
import JobSubRoleFilter from "enigma/components/sections/filter/JobSubRoleFilter";
import SalaryFilter from "enigma/components/sections/filter/SalaryFilter";
import CheckboxGroup from "enigma/components/sections/filter/CheckboxGroup";
import { useFilterState } from "enigma/components/sections/filter/useFilterState";
import FilterSection from "enigma/components/sections/filter/FilterSection";

interface SlideOutMenuProps {
  onClose: () => void;
}

const SlideOutMenu: FunctionComponent<SlideOutMenuProps> = ({ onClose }) => {
  const { filterValues, updateFilter, resetFilter, applyFilters } = useFilterState();
  const [datePickerOpen, setDatePickerOpen] = useState(false);

  // Handler creators - reduce boilerplate
  const createHandler = <T,>(key: keyof typeof filterValues) =>
    (value: T) => updateFilter(key, value as any);

  const createResetHandler = (filterName: string) =>
    () => resetFilter(filterName);

  const handleApplyAndClose = () => {
    applyFilters();
    onClose();
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={containerStyles}>
        {/* Header */}
        <Box sx={{ p: 3, display: "flex", alignItems: "center", gap: 2 }}>
          <Typography variant="h6" fontWeight={600} color="#101828">
            Filters by
          </Typography>
          <IconButton sx={{ ml: "auto" }} onClick={onClose}>
            <Close />
          </IconButton>
        </Box>

        {/* Content */}
        <Box sx={contentStyles}>
          {/* Date Posted */}
          <FilterSection
            title="Post Date Range"
            onReset={createResetHandler("Post Date Range")}
          >
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Date posted"
              value={filterValues.postDateRange}
              InputProps={{
                readOnly: true,
                startAdornment: (
                  <Image src="/calendar.svg" alt="calendar" height={20} width={20}
                    style={{ marginRight: "10px" }} />
                ),
                endAdornment: (
                  <IconButton>
                    <ArrowDropDown sx={{ color: "grey.600" }} />
                  </IconButton>
                ),
              }}
              onClick={() => setDatePickerOpen(true)}
              sx={textFieldStyles}
            />
            <Dialog
              open={datePickerOpen}
              onClose={() => setDatePickerOpen(false)}
              maxWidth="xs"
              fullWidth
              PaperProps={{ sx: dialogStyles }}
            >
              <DatePickerMenu
                onClose={() => setDatePickerOpen(false)}
                onSelect={createHandler("postDateRange")}
              />
            </Dialog>
          </FilterSection>

          {/* Location */}
          <FilterSection
            title="Location"
            onReset={createResetHandler("Location")}
          >
            <LocationFilter
              disabled={false}
              value={filterValues.selectedLocations}
              onChange={createHandler("selectedLocations")}
            />
          </FilterSection>

          {/* Industries */}
          <FilterSection
            title="Industries"
            onReset={createResetHandler("Industries")}
          >
            <Industries
              value={filterValues.industries}
              onChange={createHandler("industries")}
              disabled={false}
            />
          </FilterSection>

          {/* Job Role */}
          <FilterSection
            title="Job Role"
            onReset={createResetHandler("Job Role")}
          >
            <Box sx={{ display: "flex", gap: 2 }}>
              <JobRoleFilter
                value={filterValues.selectedJobFunctions}
                onChange={createHandler("selectedJobFunctions")}
                disabled={false}
              />
              <JobSubRoleFilter
                selectedJobFunction={filterValues.selectedJobFunctions}
                value={filterValues.jobSubfunctions}
                onChange={createHandler("jobSubfunctions")}
                disabled={false}
              />
            </Box>
          </FilterSection>

          {/* Salary Range */}
          <SalaryFilter
            initialMin={filterValues.salaryMin}
            initialMax={filterValues.salaryMax}
            rangeMin={0}
            rangeMax={10000}
            onSalaryChange={({ min, max }) => {
              updateFilter("salaryMin", min);
              updateFilter("salaryMax", max);
            }}
          />

          {/* Employment Type */}
          <FilterSection
            title="Employment Type"
            onReset={createResetHandler("Employment Type")}
          >
            <CheckboxGroup
              onChange={createHandler("EmploymentType")}
              value={filterValues.EmploymentType}
              types={["Permanent", "Contract", "Temporary"]}
            />
          </FilterSection>
        </Box>

        {/* Footer */}
        <Box sx={footerStyles}>
          <Button variant="text" color="primary">
            Save filter
          </Button>
          <DialogActions>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button variant="outlined" sx={cancelButtonStyles} onClick={onClose}>
                Cancel
              </Button>
              <Button variant="contained" onClick={handleApplyAndClose}>
                Apply
              </Button>
            </Box>
          </DialogActions>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

// Move styles to constants to reduce clutter
const containerStyles = {
  width: "100%",
  p: "0 14px",
  backgroundColor: "#fff",
  borderRadius: 3,
  boxShadow: 3,
  borderLeft: "1px solid #e4e7ec",
  overflowX: "hidden",
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  scrollbarWidth: "thin",
  scrollbarColor: "#2494b6 #f1f1f1",
  "&::-webkit-scrollbar": { width: "8px" },
  "&::-webkit-scrollbar-track": { background: "#2494b6", borderRadius: "10px" },
  "&::-webkit-scrollbar-thumb": { background: "#2494b6", borderRadius: "10px" },
};

const contentStyles = {
  p: 3,
  display: "flex",
  flexDirection: "column",
  gap: 3,
  flex: 1,
};

const textFieldStyles = {
  "& .MuiInputLabel-asterisk": { color: "#236785" },
  "& .MuiOutlinedInput-root": { borderRadius: "8px", cursor: "pointer" },
  "& .MuiOutlinedInput-input": { cursor: "pointer" },
};

const dialogStyles = {
  borderRadius: "12px",
  margin: "16px",
  maxWidth: "320px",
  width: "100%",
};

const footerStyles = {
  borderTop: "1px solid #e4e7ec",
  p: "10px 14px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const cancelButtonStyles = {
  color: "#344054",
  borderColor: "#D0D5DD",
  borderRadius: "8px",
};

export default SlideOutMenu;
