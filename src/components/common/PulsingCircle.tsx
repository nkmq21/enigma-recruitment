import {Box} from "@mui/material";
import {isWithinDays} from "enigma/utils/dateFormat";

const PulsingCircle = ({closeDate}: { closeDate: Date }) => {
    if (isWithinDays(closeDate, 3)) {
        // Critical deadline - red pulsing circle
        return (
            <Box
                sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: "#ef4444",
                    animation: "urgentPulse 1.5s infinite",
                    "@keyframes urgentPulse": {
                        "0%": {
                            transform: "scale(0.8)",
                            boxShadow: "0 0 0 0 rgba(239, 68, 68, 0.8)"
                        },
                        "50%": {
                            transform: "scale(1.2)",
                            boxShadow: "0 0 0 8px rgba(239, 68, 68, 0)"
                        },
                        "100%": {
                            transform: "scale(0.8)",
                            boxShadow: "0 0 0 0 rgba(239, 68, 68, 0)"
                        }
                    }
                }}
            />
        );
    } else if (isWithinDays(closeDate, 7)) {
        // Warning deadline - orange pulsing circle
        return (
            <Box
                sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: "#f59e0b",
                    animation: "warningPulse 2s infinite",
                    "@keyframes warningPulse": {
                        "0%": {
                            transform: "scale(0.95)",
                            boxShadow: "0 0 0 0 rgba(245, 158, 11, 0.7)"
                        },
                        "70%": {
                            transform: "scale(1)",
                            boxShadow: "0 0 0 6px rgba(245, 158, 11, 0)"
                        },
                        "100%": {
                            transform: "scale(0.95)",
                            boxShadow: "0 0 0 0 rgba(245, 158, 11, 0)"
                        }
                    }
                }}
            />
        );
    }

    return null;
};

export default PulsingCircle;