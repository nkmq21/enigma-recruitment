import { format } from "date-fns";

export function toDisplayValue(value: string | number | Date | null | undefined) {
    if (value instanceof Date) {
        return format(value, "MMMM d, yyyy");
    }
    if (typeof value === "string" && !isNaN(Date.parse(value))) {
        return format(new Date(value), "MMMM d, yyyy");
    }
    return value ?? "None";
};

export function isWithinDays(targetDate: Date, days: number): boolean {
    const now = new Date();
    const diffMs = targetDate.getTime() - now.getTime();
    const diffDays = diffMs / (1000 * 60 * 60 * 24);
    return diffDays <= days && diffDays >= 0;
}