// import * as React from 'react';
// import { Box, InputBase, InputAdornment, IconButton } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import ClearIcon from '@mui/icons-material/Clear';
// import { FilterSortBar } from './filterSortBar';
// import { usePathname, useSearchParams, useRouter } from 'next/navigation';
// import { useState } from 'react';
//
// interface SearchBarProps {
//     placeholder?: string;
//     targetPath?: string;
// }
//
// export default function SearchBar({ placeholder, targetPath }: SearchBarProps ) {
//     const router = useRouter();
//     const pathName = usePathname();
//     const searchParams = useSearchParams()!;
//
//     const [query, setQuery] = useState(searchParams.get('query')?.toString() || '');
//     const [isSpinning, setIsSpinning] = useState(false);
//     const formRef = React.useRef<HTMLFormElement>(null);
//
//     const clearQuery = () => {
//         setIsSpinning(true);
//         setQuery('');
//         const params = new URLSearchParams(searchParams.toString());
//         params.delete('query');
//         const navigationPath = targetPath || pathName;
//         router.replace(`${navigationPath}`);
//         setTimeout(() => setIsSpinning(false), 300); // Match animation duration
//     };
//
//     const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//
//         const formData = new FormData(event.currentTarget);
//         const inputSearchValue = formData.get('inputSearchValue') as string;
//
//         const params = new URLSearchParams(searchParams.toString());
//         if (inputSearchValue) {
//             params.set('query', inputSearchValue);
//         } else {
//             params.delete('query');
//         }
//
//         console.log(pathName);
//         const navigationPath = targetPath || pathName;
//         router.replace(`${navigationPath}?${params.toString()}`);
//     };
//
//     const handleIconClick = () => {
//         if (formRef.current) {
//             formRef.current.submit(); // Submit form when IconButton is clicked
//         }
//     };
//
//     return (
//         <Box
//             sx={{
//                 display: 'flex',
//                 gap: 2,
//                 mb: 3,
//                 width: '100%',
//                 alignItems: 'center',
//                 maxWidth: '100vw',
//                 flexDirection: { xs: 'column', md: 'row' },
//                 borderRadius: 2, // Updated to match ExpandedSearchBar
//                 fontSize: '20px',
//                 color: '#98A2B3',
//                 '@media (max-width: 991px)': {
//                     flexDirection: 'column',
//                     gap: 2,
//                     maxWidth: '100vw',
//                 },
//             }}
//         >
//             <Box
//                 sx={{
//                     flex: 1,
//                     minWidth: { xs: '100%', md: '60%' }, // Match original
//                     maxWidth: '100%',
//                     display: 'flex',
//                     alignSelf: 'stretch', // Match Container1
//                     backgroundColor: '#F9FAFB', // Updated from #FFF to match ExpandedSearchBar
//                     boxSizing: 'border-box',
//                     boxShadow: '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)', // Match ExpandedSearchBar
//                     justifyContent: 'center', // Match Container1
//                 }}
//             >
//                 <form
//                     ref={formRef}
//                     onSubmit={handleSearch}
//                     style={{ width: '100%', display: 'flex' }} // Updated gap to match IconParent
//                 >
//                     <Box
//                         sx={{
//                             display: 'flex',
//                             flex: 1, // Match IconParent
//                             alignItems: 'center',
//                             justifyContent: 'flex-start', // Match IconParent
//                             borderRadius: 2, // Updated to match ExpandedSearchBar
//                             height: '64px',
//                             '&:hover': { borderColor: '#98A2B3' },
//                             '&:focus-within': { borderColor: '#98A2B3' },
//                             boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Match original
//                         }}
//                     >
//                         <InputAdornment position="start">
//                             <IconButton onClick={handleIconClick} aria-label="search" disabled={!query}>
//                                 <SearchIcon
//                                     sx={{
//                                         color: '#98A2B3',
//                                         width: '24px', // Match Icon
//                                         height: '24px', // Match Icon
//                                     }}
//                                 />
//                             </IconButton>
//                         </InputAdornment>
//                         <InputBase
//                             fullWidth
//                             name="inputSearchValue"
//                             placeholder={placeholder}
//                             value={query}
//                             onChange={(e) => setQuery(e.target.value)}
//                             sx={{
//                                 width: '87%',
//                                 color: '#98A2B3',
//                                 fontSize: '20px',
//                                 textAlign: 'left', // Match JobPositionsCompany
//                                 flexShrink: 0, // Match JobPositionsCompany
//                                 '& input': {
//                                     height: '100%',
//                                     backgroundColor: '#F9FAFB', // Match ExpandedSearchBar
//                                 },
//                             }}
//                         />
//                         {query && (
//                             <InputAdornment
//                                 position="end"
//                                 sx={{
//                                     animation: query ? 'flipIn 0.3s ease-in forwards' : 'flipOut 0.3s ease-out forwards',
//                                     transformStyle: 'preserve-3d',
//                                     '@keyframes flipIn': {
//                                         '0%': { transform: 'rotateY(90deg)', opacity: 0 },
//                                         '100%': { transform: 'rotateY(0deg)', opacity: 1 },
//                                     },
//                                     '@keyframes flipOut': {
//                                         '0%': { transform: 'rotateY(0deg)', opacity: 1 },
//                                         '100%': { transform: 'rotateY(-90deg)', opacity: 0 },
//                                     },
//                                 }}
//                             >
//                                 <IconButton
//                                     onClick={clearQuery}
//                                     edge="end"
//                                     sx={{
//                                         animation: isSpinning ? 'spin 0.3s ease-in-out' : 'none',
//                                         '@keyframes spin': {
//                                             '0%': { transform: 'rotateX(0deg)' },
//                                             '100%': { transform: 'rotateX(360deg)' },
//                                         },
//                                         width: '24px', // Match Icon
//                                         height: '24px', // Match Icon
//                                     }}
//                                 >
//                                     <ClearIcon sx={{ color: '#000', width: '24px', height: '24px' }} />
//                                 </IconButton>
//                             </InputAdornment>
//                         )}
//                     </Box>
//                 </form>
//             </Box>
//             <FilterSortBar />
//         </Box>
//     );
// }