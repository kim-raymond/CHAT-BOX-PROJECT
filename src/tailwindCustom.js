tailwind.config = {
          darkMode: 'class',
          theme: {
              extend: {
                  screens: {
                      sm: '480px',
                      'sm-md': '550px',
                      md: '768px',
                      lg: '1010px',
                      xl: '1365px',
                  },
                  colors: {
                      primary: {
                          DEFAULT: '#FB5BA2',
                          dark: '#C30676',
                      },
                      accent: {
                          DEFAULT: '#F40793',
                          dark: '#C30676',
                      },
                      status: {
                          DEFAULT: '#FF0167',
                          dark: '#B77702',
                      },
                      activePink:{
                        DEFAULT:'#FF0464'
                      },
                      activeGreen:{
                        DEFAULT:'#14E04D'
                      },
                      brightPink:{
                        DEFAULT:'#FF0066'
                      },
                      gray:{
                        700:'#344054'
                      },
                      orangeButton:{
                        DEFAULT:'#EE3400'
                      },
                      orangeDark:{
                        DEFAULT:'#FF4405'
                      },
                      secondDarkOrange:{
                        DEFAULT:'#FF4848'
                      },
                      greyButton:{
                        DEFAULT:'##98A2B3'
                      },
                      darkGrey:{
                        DEFAULT:'#D1D0FE'
                      },
                      blueDark:{
                        DEFAULT:'#155EEF'
                      },
                      violetCream:{
                        DEFAULT:'#4640FF'
                      },
                      blueViolet:{
                        DEFAULT:'#5549FF'
                      },
                      lightViolet:{
                        DEFAULT:'#5549FF'
                      },
                      offWhite:{
                          DEFAULT: '#EDEDED'
                      },
                      avatar: {
                          DEFAULT: '#4CC9F0',
                          dark: '#4CC9F0',
                      },
                      customGrey:{
                        DEFAULT:'#E3E4E1'
                      },
                      customGrey2:{
                        DEFAULT:'#DFE1DD'
                      },
                      customDarkGrey:{
                        DEFAULT:'#B7BBBB'
                      },
                      background: {
                          DEFAULT: 'rgba(234, 236, 240, 0.9)',
                          dark: 'rgba(34,37,38,0.9)',
                          'grey': 'rgba(237, 237, 237, 1)',
                          green: '#07F468',
                      },
                      panel: {
                          hover: {
                              DEFAULT: 'rgba(12, 17, 29, 0.1)',
                              dark: 'rgba(12, 17, 29, 0.1)',
                          }
                      },
                      notification: {
                          hover: {
                              DEFAULT: 'rgba(251, 91, 162, 0.1)',
                              dark: 'rgba(251, 91, 162, 0.1)',
                          }
                      },
                      sidebar: {
                          bg: {
                              DEFAULT: 'rgba(255, 255, 255, 0.7)',
                              dark: 'rgba(24, 26, 27, 0.7)'
                          },
                          active: {
                              DEFAULT: 'rgba(251, 91, 162, 0.2)',
                              dark: 'rgba(148, 4, 68, 0.2)'
                          },
                          text: {
                              DEFAULT: '#475467',
                              dark: '#B1B1AA'
                          },
                          'active-text': {
                              DEFAULT: '#ff0066',
                              dark: '#ff1a75'
                          },
                          logout: {
                              bg: {
                                  DEFAULT: 'rgba(41, 112, 255, 0.1)',
                                  dark: 'rgba(0, 60, 179, 0.1)'
                              },
                              hover: {
                                  DEFAULT: 'rgba(12, 17, 29, 0.1)',
                                  dark: 'rgba(10, 14, 23, 0.1)'
                              },
                              text: {
                                  DEFAULT: '#2970ff',
                                  dark: '#3698ff'
                              }
                          },
                          help: {
                              text: {
                                  DEFAULT: '#667085',
                                  dark: '#9e9589'
                              }
                          }
                      },
                      fce40d: '#fce40d',
                      d0d5dd: '#d0d5dd',
                      ff00a6: '#ff00a6',
                      dee5ec: '#dee5ec'
                  },
                  backdropBlur: {
                      xs: '10px',
                      lg: '25px',
                      md:'5rem'
                  },
                  boxShadow: {
                      sidebar: '0 0 8px 0 rgba(0, 0, 0, 0.08)',
                      custom: '4px 0 10px 0 rgba(0, 0, 0, 0.08)',
                      custom2: "0 0.25rem 0.25rem 0 rgba(0,0,0,0.25)",
                      '3xl': '0 0 0.75rem rgba(0, 0, 0, 0.25)',
                      'purple-glow': '0 0 8px 0 rgba(131, 88, 255, 0.5)',
                      
                  },
                  fontFamily: {
                      sans: ['Poppins', 'Inter', 'Montserrat', 'Open Sans', 'arial', 'sans-serif'],
        }
        },
    }
}