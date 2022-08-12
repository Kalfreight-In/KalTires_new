module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'kaltire-red': '#ED1C24',
        'regal-blue': '#243c5a',
        'tire-dark': '#24252D',
        'tire-gray-1': '#E3E1E3',
        'tire-gray-2': '#888888',
        'tire-gray-3': '#222121',
        'tire-black-1': '#2D2E36',
        'tire-black-2': '#1B1A21',
        'tire-black-3': '#2A2D3A',
        'tire-black-4': '#24252D',
        'tire-red-violet': '#DA18A3',
        'file-active': '#2196f3',
        'file-accept': '#00e676',
        'file-reject': '#ff1744',
        'overlay-black': 'rgba(0, 0, 0, 0.8)',
        'bg-white-1': '#FFFFFF',
        'onsite-text': '#514A4A',
        'onsite-heading': '#323232',
        'speciality-background': '#ffffff00',
      },
      gridTemplateColumns: {
        onsiteTemplate: 'repeat(auto-fit, minmax(350px, 1fr))',
        onsiteTemplate2: 'repeat(auto-fit, minmax(300px, 1fr))',
        servicesTemplate: 'repeat(4, minmax(0, 1fr))',
        servicesTabTemplate: 'repeat(2,minmax(0,1fr))',
        servicesMobileTemplate: 'repeat(1,minmax(0,1fr))',
      },
      // gridTemplateRows: {
      //   onsiterowTemplate: 'repeat(5,1fr)',
      // },

      width: {
        215: '215px',
        357: '357px',
        557: '557px',
        onsiteimage: '155px',
      },
      backgroundImage: {
        'footer-texture':
          "url('https://raw.githubusercontent.com/kalfreight-in/BigRigGroups/master/src/assets/Images/abouthomeimage.png')",
      },
      minWidth: {
        155: '155px',
        190: '190px',
        215: '215px',
        240: '240px',
        256: '256px',
        327: '327px',
      },
      height: {
        300: '300px',
        557: '557px',
        Onsiteheight: '95vh',
        onsitegridheight: '75vh',
        onsiteimage: '170px',
      },
      inset: {
        45: '45%',
        65: '65px',
      },
      spacing: {
        65: '65px',
      },
      flex: {
        2: '2 2 0%',
      },
      lineHeight: {
        70: '70px',
      },
      zIndex: {
        '-5': '-5',
        0: '0',
      },
    },
    // screens: {
    //   lg: { max: '1800px' },
    //   md: { max: '990px' },
    //   sm: { max: '600px' },
    //   xs: { max: '400px' },
    //   minmd: '1700px',
    //   minlg: '2100px',
    // },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
