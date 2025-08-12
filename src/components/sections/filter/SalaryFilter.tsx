import React, { FunctionComponent, useRef, useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Slider,
  ThemeProvider,
  Button,
} from "@mui/material";
import Image from "next/image";
import theme from "enigma/styles/theme";

// Define ResetButton component
const ResetButton: FunctionComponent<{
  filterName: string;
  onReset: (filterName: string) => void;
}> = ({ filterName, onReset }) => (
  <Button
    variant="text"
    size="small"
    onClick={() => onReset(filterName)}
    sx={{ p: 0, justifyContent: "end", mb: 0.5 }}
  >
    Reset
  </Button>
);

interface SalaryFilterProps {
  onSalaryChange?: (salaryRange: { min: number; max: number }) => void;
  initialMin?: number;      // User's previously selected min value
  initialMax?: number;      // User's previously selected max value
  rangeMin?: number;        // Filter's minimum possible value
  rangeMax?: number;        // Filter's maximum possible value
}

const SalaryFilter: FunctionComponent<SalaryFilterProps> = ({
  onSalaryChange,
  initialMin = 0,
  initialMax = 10000,
  rangeMin = 0,           // Filter range starts at 0
  rangeMax = 10000,       // Filter range goes up to 10000
}) => {
  const [value, setValue] = useState<number[]>([initialMin, initialMax]);
  const [textValues, setTextValues] = useState({
    from: initialMin.toString(),
    to: initialMax.toString(),
  });

  // Format value with $
  const valueLabelFormat = (val: number) => `$${val.toLocaleString()}`;

  // Calculate label position as percentage
  const getLabelPosition = (val: number) => {
    return ((val - rangeMin) / (rangeMax - rangeMin)) * 100;
  };

  // Handle slider change
  const handleChange = (event: Event, newValue: number | number[]) => {
    const newSliderValue = newValue as number[];
    setValue(newSliderValue);

    // Update text field values
    setTextValues({
      from: newSliderValue[0].toString(),
      to: newSliderValue[1].toString(),
    });

    // Call parent callback
    if (onSalaryChange) {
      onSalaryChange({ min: newSliderValue[0], max: newSliderValue[1] });
    }
  };

  // Handle TextField change
  const handleTextFieldChange = (field: 'from' | 'to') => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = event.target.value.replace(/[^0-9]/g, '');
    const numValue = inputValue ? Math.min(parseInt(inputValue), rangeMax) : rangeMin;

    // Update text values
    const newTextValues = { ...textValues, [field]: inputValue };
    setTextValues(newTextValues);

    // Update slider values
    const newValue = [...value];
    const index = field === 'from' ? 0 : 1;
    newValue[index] = numValue;

    // Ensure min <= max
    if (field === 'from' && numValue > newValue[1]) {
      newValue[1] = numValue;
      setTextValues({ ...newTextValues, to: numValue.toString() });
    } else if (field === 'to' && numValue < newValue[0]) {
      newValue[0] = numValue;
      setTextValues({ ...newTextValues, from: numValue.toString() });
    }

    setValue(newValue);

    // Call parent callback
    if (onSalaryChange) {
      onSalaryChange({ min: newValue[0], max: newValue[1] });
    }
  };

  // Handle reset
  const handleReset = () => {
    setValue([rangeMin, rangeMax]); // Reset to full range
    setTextValues({
      from: rangeMin.toString(),
      to: rangeMax.toString()
    });

    if (onSalaryChange) {
      onSalaryChange({ min: rangeMin, max: rangeMax });
    }
  };

  // Sync with external changes
  useEffect(() => {
    setValue([initialMin, initialMax]);
    setTextValues({
      from: initialMin.toString(),
      to: initialMax.toString(),
    });
  }, [initialMin, initialMax]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
        <Typography variant="body2" fontWeight={500} color="#31373d">
          Salary Range
        </Typography>
        <ResetButton filterName="Salary Range" onReset={handleReset} />
      </Box>
      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="From"
          value={textValues.from}
          onChange={handleTextFieldChange('from')}
          InputProps={{
            startAdornment: (
              <Image
                src="/salaryMoney.svg"
                alt="salary"
                height={20}
                width={20}
                style={{ marginRight: "10px" }}
              />
            ),
          }}
          sx={{
            "& .MuiInputLabel-asterisk": {
              color: "#236785",
            },
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
            },
          }}
        />
        <TextField
          fullWidth
          variant="outlined"
          placeholder="To"
          value={textValues.to}
          onChange={handleTextFieldChange('to')}
          InputProps={{
            startAdornment: (
              <Image
                src="/salaryMoney.svg"
                alt="salary"
                height={20}
                width={20}
                style={{ marginRight: "10px" }}
              />
            ),
          }}
          sx={{
            "& .MuiInputLabel-asterisk": {
              color: "#236785",
            },
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
            },
          }}
        />
      </Box>
      <Slider
        value={value}
        onChange={handleChange}
        min={rangeMin}
        max={rangeMax}
        sx={{ color: "primary.main" }}
      />
      <Box sx={{ position: "relative", height: "20px" }}>
        <Typography
          variant="body1"
          sx={{
            position: "absolute",
            left: `${getLabelPosition(value[0])}%`,
            transform: "translateX(-50%)",
            color: "#101828",
            whiteSpace: "nowrap",
            fontWeight: 500,
          }}
        >
          {valueLabelFormat(value[0])}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            position: "absolute",
            left: `${getLabelPosition(value[1])}%`,
            transform: "translateX(-50%)",
            color: "#101828",
            whiteSpace: "nowrap",
            fontWeight: 500,
          }}
        >
          {valueLabelFormat(value[1])}
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default SalaryFilter;
