import * as React from 'react';
import { Box, TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { FilterSortBar } from './filterSortBar';
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar({ placeholder }: { placeholder?: string }) {
    const router = useRouter();
    const pathName = usePathname();
    const searchParams = useSearchParams();

    const [query, setQuery] = useState(searchParams.get('query')?.toString() || "");
    const formRef = React.useRef<HTMLFormElement>(null);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const clearQuery = () => {
        setQuery('');

        const params = new URLSearchParams(searchParams.toString());
        params.delete('query');
        // params.set('page', '1');
        router.replace(`${pathName}`);
    }

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const inputSearchValue = formData.get('inputSearchValue') as string;

        const params = new URLSearchParams(searchParams.toString());
        if (inputSearchValue) {
            params.set("query", inputSearchValue);
        } else {
            params.delete("query");
        }

        // params.set('page', "1");
        console.log(pathName);
        router.replace(`${pathName}?${params.toString()}`);
    }

    const handleIconClick = () => {
        if (formRef.current) {
            formRef.current.submit(); // Submit form khi nhấn IconButton
        }
    };
    return (
        <Box sx={{
            display: 'flex',
            gap: 2,
            p: 0.5,
            mb: 3,
            width: '100%',
            alignItems: 'center',
            maxWidth: '100vw',
            flexDirection: { xs: 'column', md: 'row' },
            backgroundColor: '#FFF',
            boxSizing: 'border-box',
            '@media (max-width: 991px)': {
                flexDirection: 'column',
                gap: 2,
                maxWidth: '100vw',
            },
        }}>
            <Box
                sx={{
                    flex: 1,
                    minWidth: { xs: '100%', md: '60%' }, // min 60% under 991px
                    maxWidth: '100%',
                    display: 'flex',
                }}
            >
                <form
                    ref={formRef}
                    onSubmit={handleSearch}
                    style={{ width: '100%', display: 'flex', gap: '16px' }}
                >
                    <TextField
                        fullWidth
                        name="inputSearchValue"
                        variant="outlined"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder={placeholder}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <IconButton onClick={handleIconClick} aria-label='search' disabled={!query}>
                                        <SearchIcon sx={{ color: '#98A2B3' }} />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: 2,
                                fontSize: 20,
                                height: '64px',
                                '& fieldset': { borderColor: '#98A2B3' },
                                '&:hover fieldset': { borderColor: '#98A2B3' },
                                '&.Mui-focused fieldset': { borderColor: '#98A2B3' },
                            },
                            '& input': { color: '#98A2B3', fontSize: '20px' },
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        }}
                    />
                </form>
            </Box>
            <FilterSortBar />
        </Box>
    );
}