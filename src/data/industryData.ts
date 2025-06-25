// src/data/industryData.ts

export interface IndustryData {
    industryId: string;
    industryName: string;
}

export const INDUSTRIES: IndustryData[] = [
    { industryId: 'AER', industryName: 'Aerospace' },
    { industryId: 'AUT', industryName: 'Automotive' },
    { industryId: 'APF', industryName: 'Apparel & Footwear' },
    { industryId: 'CHE', industryName: 'Chemicals' },
    { industryId: 'COS', industryName: 'Cosmetics' },
    { industryId: 'ELC', industryName: 'Electronics' },
    { industryId: 'FOB', industryName: 'Food & Beverages' },
    { industryId: 'FUR', industryName: 'Furniture' },
    { industryId: 'IME', industryName: 'Industrial Machinery & Equipment' },
    { industryId: 'JRY', industryName: 'Jewelry' },
    { industryId: 'LAP', industryName: 'Labels & Packaging' },
    { industryId: 'MED', industryName: 'Medical & Pharmaceuticals' },
    { industryId: 'MET', industryName: 'Metal Work & Fabrication' }
];

export const getIndustryNames = (): string[] => {
    return INDUSTRIES.map(ind => ind.industryName).sort((a, b) => a.localeCompare(b));
};

// export const getIndustryIdByName = (name: string): string | undefined => {
//     const found = INDUSTRIES.find(ind => ind.industryName === name);
//     return found?.industryId;
// };