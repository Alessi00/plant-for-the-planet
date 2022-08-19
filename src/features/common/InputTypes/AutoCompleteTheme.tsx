import { Autocomplete, styled } from '@mui/material';

const MuiAutocomplete = styled(Autocomplete)((/* { theme } */) => {
  return {
    width: '100%',
    '& .Mui-disabled .iconFillColor': {
      fillOpacity: '38%',
    },
    flex: '1',
  };
});

const StyledAutoCompleteOption = styled('li')({
  '& span': {
    marginRight: 10,
    fontSize: 18,
  },
});

export { MuiAutocomplete, StyledAutoCompleteOption };
