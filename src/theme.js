import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

theme = createTheme({
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some Css
          FontSize: '1.5rem',
        },
        contained: {
          // Style overrides
          color: '#fff',
          backgroundColor: '#556cd6',
          '&:hover': {
            backgroundColor: '#19857b',
          }
        }
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          h6: 'h6',
          subtitle1: 'h3',
          subtitle2: 'h3',
          body1: 'span',
          body2: 'span',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
        }
      }
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: '105px !important',
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          display: 'flex',
          color: '#abb7c4 !important',
          height: '46px',
          padding: '4px 3px 5px',
          marginTop: '1rem',
          border: '4px solid #020d18;',
          
        }
      }
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          marginTop: '1rem !important',
          display: 'block',
          width: '100% !Important',
          margin: '0px !important',
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: '#fff',
          padding: '12px 16px 10px 0',
          '&:hover': {
            color: '#dcf836',
          },
          '&.Mui-selected': {
            color: '#dcf836',
          }
        },
        
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          backgroundColor: 'inherit',
          '&.myClass': {
            '& .MuiTabs-indicator': {
              backgroundColor: '#dcf836',
            }
          }
        },
        indicator: {
          backgroundColor: 'transparent',
        },
      }
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: '#fff',
        },
        multiline: {
          paddingLeft: '21px',
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          paddingLeft: '0',
        }
      }
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: '100%',
          height: '100%',
          borderRadius: '4px',
        }
      }
    },
    MuiStack: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'center',
          marginTop: '1rem',
          color: '#fff',
          margin: '0 auto',
        }

      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: '#dcf836',
        }
      }
    },
    MuiFab: {
      styleOverrides: {
        root: {
          backgroundColor: '#dd003f',
           '&:hover': {
            backgroundColor: '#dd003f',
           }
        }

      }
    }
  },
});


export default theme;
