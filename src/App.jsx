import React, { useState } from 'react';
import { createTheme, ThemeProvider, CssBaseline, Container, Box, Typography, AppBar, Toolbar, Chip, Grid, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';
import { responsiveFontSizes } from '@mui/material/styles';
import { styled } from '@mui/system';
import { Link as ScrollLink, Element } from 'react-scroll';
import { Fade } from "react-awesome-reveal";
import image1 from "./assets/images/image1.jpg"
import image2 from "./assets/images/image2.jpg"
import image3 from "./assets/images/image3.jpg"
import image4 from "./assets/images/image4.jpg"
import image5 from "./assets/images/image5.jpg"
import image6 from "./assets/images/image6.jpg"
import image7 from "./assets/images/image7.jpg"
import image8 from "./assets/images/image8.jpg"
import image9 from "./assets/images/image9.jpg"
import image10 from "./assets/images/image10.jpg"
import image11 from "./assets/images/image11.jpg"
import image12 from "./assets/images/image12.jpg"
import image13 from "./assets/images/image13.jpg"
import image14 from "./assets/images/image14.jpg"
import image15 from "./assets/images/image15.jpg"
import image16 from "./assets/images/image16.jpg"
import image17 from "./assets/images/image17.jpg"
import image18 from "./assets/images/image18.jpg"
import image19 from "./assets/images/image19.jpg"
import image20 from "./assets/images/image20.jpg"
import image21 from "./assets/images/image21.jpg"
import image22 from "./assets/images/image22.jpg"
import image23 from "./assets/images/image23.jpg"
import image24 from "./assets/images/image24.jpg"
import image25 from "./assets/images/image25.jpg"
import image26 from "./assets/images/image26.jpg"
import image27 from "./assets/images/image27.jpg"
import image28 from "./assets/images/image28.jpg"
import image29 from "./assets/images/image29.jpg"
import image30 from "./assets/images/image30.jpg"
import image31 from "./assets/images/image31.jpg"
import image32 from "./assets/images/image32.jpg"
import image33 from "./assets/images/image33.jpg"
import image34 from "./assets/images/image34.jpg"
import image35 from "./assets/images/image35.jpg"

// Icon
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// ##################################################################
//  ۱. تمام اطلاعات خود را در این بخش ویرایش کنید
// ##################################################################

const portfolioData = {
  personalInfo: {
    name: 'یاسین کولیوند',
    title: 'طراح گرافیک | UI/UX Designer',
    bio: 'یک طراح گرافیک خلاق و جزئی‌نگر با بیش از 2 سال تجربه در زمینه طراحی هویت بصری، رابط کاربری و کمپین‌های تبلیغاتی. علاقه‌مند به خلق تجربه‌های بصری ماندگار و تاثیرگذار.',
    email: 'yasin123123ys1@gmail,com',
    phone: '09927953211',
    socials: {
      linkedin: 'https://linkedin.com/in/yourprofile',
      instagram: 'https://instagram.com/yourprofile',
    },
  },
  aboutMe: `
    من از سال 1402 به صورت حرفه‌ای وارد دنیای گرافیک شدم و همیشه به دنبال یادگیری تکنیک‌های جدید و به‌روز نگه داشتن خودم هستم. توانایی کار با نرم‌افزارهای خانواده Adobe را به صورت کامل دارم و به اصول تایپوگرافی، رنگ‌شناسی و ترکیب‌بندی مسلط هستم. در پروژه‌های مختلفی از طراحی لوگو و برندبوک گرفته تا طراحی پوستر و بنر. هدف من تبدیل ایده‌های خام به واقعیت‌های بصری زیبا و کارآمد است.
  `,
  skills: [
    'Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'UI/UX Design', 'Branding', 'Typography', 'Logo Design', 'Social Media Content'
  ],
  experience: [
    {
      role: 'طراح گرافیک ',
      company: 'شرکت مرغ سالم',
      description: 'طراحی بنرهای تبلیغاتی، مدیریت هویت بصری برند، طراحی کمپین‌ها.'
    },
    {
      role: 'طراح گرافیک',
      company: 'پیج pixory',
      description: 'طراحی بنرهای تبلیغاتی، مدیریت هویت بصری برند، طراحی کمپین‌ها.'
    }
  ],
  portfolio: [
    {
      title: 'پروژه طراحی هویت بصری',
      description: 'طراحی لوگو و برندبوک برای یک استارتاپ در حوزه فین‌تک',
      imageUrl: image1,
    },
    {
      title: 'کمپین تبلیغاتی اینستاگرام',
      description: 'طراحی پست و استوری برای کمپین فصل پاییز',
      imageUrl: image2,
    },
    {
      title: 'طراحی رابط کاربری اپلیکیشن',
      description: 'طراحی کامل UI/UX یک اپلیکیشن سفارش آنلاین غذا',
      imageUrl: image3,
    },
    {
      title: 'طراحی رابط کاربری اپلیکیشن',
      description: 'طراحی کامل UI/UX یک اپلیکیشن سفارش آنلاین غذا',
      imageUrl: image4,
    },
    {
      title: 'طراحی رابط کاربری اپلیکیشن',
      description: 'طراحی کامل UI/UX یک اپلیکیشن سفارش آنلاین غذا',
      imageUrl: image5,
    },
    {
      title: 'طراحی رابط کاربری اپلیکیشن',
      description: 'طراحی کامل UI/UX یک اپلیکیشن سفارش آنلاین غذا',
      imageUrl: image6,
    },
    {
      title: 'طراحی رابط کاربری اپلیکیشن',
      description: 'طراحی کامل UI/UX یک اپلیکیشن سفارش آنلاین غذا',
      imageUrl: image7,
    },
    {
      title: 'طراحی رابط کاربری اپلیکیشن',
      description: 'طراحی کامل UI/UX یک اپلیکیشن سفارش آنلاین غذا',
      imageUrl: image8,
    },
    {
      title: 'طراحی رابط کاربری اپلیکیشن',
      description: 'طراحی کامل UI/UX یک اپلیکیشن سفارش آنلاین غذا',
      imageUrl: image9,
    },
    {
      title: 'طراحی رابط کاربری اپلیکیشن',
      description: 'طراحی کامل UI/UX یک اپلیکیشن سفارش آنلاین غذا',
      imageUrl: image10,
    },
    {
      title: 'طراحی رابط کاربری اپلیکیشن',
      description: 'طراحی کامل UI/UX یک اپلیکیشن سفارش آنلاین غذا',
      imageUrl: image11,
    },
    {
      title: 'طراحی رابط کاربری اپلیکیشن',
      description: 'طراحی کامل UI/UX یک اپلیکیشن سفارش آنلاین غذا',
      imageUrl: image12,
    },
    {
      title: 'طراحی رابط کاربری اپلیکیشن',
      description: 'طراحی کامل UI/UX یک اپلیکیشن سفارش آنلاین غذا',
      imageUrl: image13,
    },
    {
      title: 'طراحی رابط کاربری اپلیکیشن',
      description: 'طراحی کامل UI/UX یک اپلیکیشن سفارش آنلاین غذا',
      imageUrl: image14,
    },
    {
      title: 'طراحی رابط کاربری اپلیکیشن',
      description: 'طراحی کامل UI/UX یک اپلیکیشن سفارش آنلاین غذا',
      imageUrl: image15,
    },
    {
      title: 'طراحی رابط کاربری اپلیکیشن',
      description: 'طراحی کامل UI/UX یک اپلیکیشن سفارش آنلاین غذا',
      imageUrl: image16,
    },
    {
      title: 'طراحی رابط کاربری اپلیکیشن',
      description: 'طراحی کامل UI/UX یک اپلیکیشن سفارش آنلاین غذا',
      imageUrl: image17,
    },
    {
      title: 'طراحی رابط کاربری اپلیکیشن',
      description: 'طراحی کامل UI/UX یک اپلیکیشن سفارش آنلاین غذا',
      imageUrl: image18,
    },
    {
      title: 'طراحی رابط کاربری اپلیکیشن',
      description: 'طراحی کامل UI/UX یک اپلیکیشن سفارش آنلاین غذا',
      imageUrl: image19,
    },
    {
      title: 'طراحی رابط کاربری اپلیکیشن',
      description: 'طراحی کامل UI/UX یک اپلیکیشن سفارش آنلاین غذا',
      imageUrl: image20,
    },
    {
      title: 'طراحی رابط کاربری اپلیکیشن',
      description: 'طراحی کامل UI/UX یک اپلیکیشن سفارش آنلاین غذا',
      imageUrl: image21,
    },
    {
      title: 'طراحی رابط کاربری اپلیکیشن',
      description: 'طراحی کامل UI/UX یک اپلیکیشن سفارش آنلاین غذا',
      imageUrl: image22,
    },
    {
      title: 'طراحی رابط کاربری اپلیکیشن',
      description: 'طراحی کامل UI/UX یک اپلیکیشن سفارش آنلاین غذا',
      imageUrl: image23,
    },
    {
      title: 'طراحی رابط کاربری اپلیکیشن',
      description: 'طراحی کامل UI/UX یک اپلیکیشن سفارش آنلاین غذا',
      imageUrl: image24,
    },
    {
      title: 'طراحی رابط کاربری اپلیکیشن',
      description: 'طراحی کامل UI/UX یک اپلیکیشن سفارش آنلاین غذا',
      imageUrl: image25,
    },
    {
      title: 'طراحی رابط کاربری اپلیکیشن',
      description: 'طراحی کامل UI/UX یک اپلیکیشن سفارش آنلاین غذا',
      imageUrl: image26,
    },
    {
      title: 'طراحی رابط کاربری اپلیکیشن',
      description: 'طراحی کامل UI/UX یک اپلیکیشن سفارش آنلاین غذا',
      imageUrl: image27,
    },
    {
      title: 'طراحی رابط کاربری اپلیکیشن',
      description: 'طراحی کامل UI/UX یک اپلیکیشن سفارش آنلاین غذا',
      imageUrl: image28,
    },
    {
      title: 'طراحی رابط کاربری اپلیکیشن',
      description: 'طراحی کامل UI/UX یک اپلیکیشن سفارش آنلاین غذا',
      imageUrl: image29,
    },
    {
      title: 'طراحی رابط کاربری اپلیکیشن',
      description: 'طراحی کامل UI/UX یک اپلیکیشن سفارش آنلاین غذا',
      imageUrl: image30,
    },
    {
      title: 'طراحی رابط کاربری اپلیکیشن',
      description: 'طراحی کامل UI/UX یک اپلیکیشن سفارش آنلاین غذا',
      imageUrl: image31,
    },
    {
      title: 'طراحی رابط کاربری اپلیکیشن',
      description: 'طراحی کامل UI/UX یک اپلیکیشن سفارش آنلاین غذا',
      imageUrl: image32,
    },
    {
      title: 'طراحی رابط کاربری اپلیکیشن',
      description: 'طراحی کامل UI/UX یک اپلیکیشن سفارش آنلاین غذا',
      imageUrl: image33,
    },
    {
      title: 'طراحی رابط کاربری اپلیکیشن',
      description: 'طراحی کامل UI/UX یک اپلیکیشن سفارش آنلاین غذا',
      imageUrl: image34,
    },
    {
      title: 'طراحی رابط کاربری اپلیکیشن',
      description: 'طراحی کامل UI/UX یک اپلیکیشن سفارش آنلاین غذا',
      imageUrl: image35,
    },
  ]
};

// ##################################################################
//  ۲. استایل‌ها و تم سایت (بهینه‌سازی شده برای ریسپانسیو)
// ##################################################################

// تعریف تم دارک و فارسی با فونت ریسپانسیو
let darkTheme = createTheme({
  direction: 'rtl',
  palette: {
    mode: 'dark',
    primary: { main: '#BB86FC' },
    secondary: { main: '#03DAC6' },
    background: { default: '#121212', paper: '#1E1E1E' },
    text: { primary: '#FFFFFF', secondary: '#B3B3B3' },
  },
  typography: {
    fontFamily: 'Vazirmatn, Arial, sans-serif',
    h3: { fontWeight: 700 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 500 }
  },
});
darkTheme = responsiveFontSizes(darkTheme); // این خط فونت‌ها را ریسپانسیو می‌کند

// استایل‌های سفارشی
const StyledAppBar = styled(AppBar)({
  backgroundColor: 'rgba(18, 18, 18, 0.8)',
  backdropFilter: 'blur(10px)',
  boxShadow: 'none',
  borderBottom: `1px solid ${darkTheme.palette.divider}`,
  direction:"rtl"
});

const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 2),
  minHeight: '80vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  direction:"rtl",
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(8, 2), // کاهش پدینگ در موبایل
  },
}));

const HeroSection = styled(Section)({
  minHeight: '100vh',
  backgroundImage: 'radial-gradient(circle, rgba(187, 134, 252, 0.1) 0%, rgba(18, 18, 18, 0) 60%)',
});

const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(5),
  position: 'relative',
  '&::after': {
    content: '""', display: 'block', width: '60px', height: '4px',
    backgroundColor: theme.palette.primary.main, margin: '10px auto 0', borderRadius: '2px',
  }
}));

const PortfolioImageWrapper = styled(Box)(({ theme }) => ({
  width: '100%', maxWidth: '900px', marginBottom: theme.spacing(6),
  borderRadius: '16px', overflow: 'hidden',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.22)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': { transform: 'scale(1.02)' },
  '& img': { width: '100%', height: 'auto', display: 'block' }
}));

const Footer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4), backgroundColor: '#1E1E1E',
  textAlign: 'center', borderTop: `1px solid ${theme.palette.divider}`,
}));

// ##################################################################
//  ۳. کامپوننت اصلی برنامه
// ##################################################################

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery(darkTheme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = ['خانه', 'درباره من', 'نمونه کار', 'مهارت‌ها', 'سوابق', 'تماس با من'];
  const navLinks = ['home', 'about', 'portfolio', 'skills', 'experience', 'contact'];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', background: darkTheme.palette.background.default, height: '100%' }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
        <Typography variant="h6" sx={{ my: 2 }}>منو</Typography>
        <IconButton><CloseIcon /></IconButton>
      </Box>
      <List>
        {navItems.map((item, index) => (
          <ListItem key={item} disablePadding>
            <ScrollLink
              to={navLinks[index]} spy={true} smooth={true} offset={-70} duration={500}
              style={{ textDecoration: 'none', width: '100%' }}
              onClick={handleDrawerToggle}
            >
              <ListItemText primary={item} sx={{ color: 'text.primary', textAlign: 'center', padding: '10px 0' }} />
            </ScrollLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      
      {/* نوبار ریسپانسیو */}
      <StyledAppBar position="sticky">
        <Toolbar sx={{ justifyContent: isMobile ? 'space-between' : 'center' }}>
          {isMobile ? (
            <>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'right' }}>
                {portfolioData.personalInfo.name}
              </Typography>
              <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
            </>
          ) : (
            navItems.map((item, index) => (
              <ScrollLink key={item} to={navLinks[index]} spy={true} smooth={true} offset={-70} duration={500} style={{ textDecoration: 'none' }}>
                <Typography sx={{ color: 'text.primary', margin: '0 15px', cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>
                  {item}
                </Typography>
              </ScrollLink>
            ))
          )}
        </Toolbar>
      </StyledAppBar>

      {/* منوی کشویی موبایل */}
      <nav>
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{ display: { xs: 'block', md: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 } }}
        >
          {drawer}
        </Drawer>
      </nav>

      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
        {/* بخش Hero */}
        <Element name="home">
          <HeroSection>
            <Fade direction="down" triggerOnce>
              <Typography variant="h3" component="h1" gutterBottom>{portfolioData.personalInfo.name}</Typography>
              <Typography variant="h5" component="h2" color="text.secondary">{portfolioData.personalInfo.title}</Typography>
              <Typography variant="body1" sx={{ maxWidth: '600px', mt: 3 }}>{portfolioData.personalInfo.bio}</Typography>
            </Fade>
          </HeroSection>
        </Element>

        {/* بخش درباره من */}
        <Element name="about">
          <Section>
            <Container maxWidth="md">
              <Fade triggerOnce>
                <SectionTitle variant="h4">درباره من</SectionTitle>
                <Typography variant="body1" color="text.secondary" sx={{ whiteSpace: 'pre-line', textAlign: 'justify' }}>
                  {portfolioData.aboutMe}
                </Typography>
              </Fade>
            </Container>
          </Section>
        </Element>

        {/* بخش نمونه کارها */}
        <Element name="portfolio">
          <Section>
            <Container maxWidth="md">
              <SectionTitle variant="h4">نمونه کارها</SectionTitle>
              {portfolioData.portfolio.map((item, index) => (
                <Fade key={index} direction="up" cascade damping={0.1} triggerOnce>
                  <PortfolioImageWrapper>
                    <img src={item.imageUrl} alt={item.title} loading="lazy" />
                  </PortfolioImageWrapper>
                </Fade>
              ))}
            </Container>
          </Section>
        </Element>

        {/* بخش مهارت‌ها */}
        <Element name="skills">
          <Section>
            <Container maxWidth="md">
              <Fade triggerOnce>
                <SectionTitle variant="h4">مهارت‌ها</SectionTitle>
                <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1.5 }}>
                  {portfolioData.skills.map((skill) => (
                    <Chip key={skill} label={skill} color="primary" variant="outlined" />
                  ))}
                </Box>
              </Fade>
            </Container>
          </Section>
        </Element>

        {/* بخش سوابق شغلی */}
        <Element name="experience">
          <Section>
            <Container maxWidth="md" sx={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column",
              }}>
              <SectionTitle variant="h4">سوابق شغلی</SectionTitle>
              <Grid container spacing={4} sx={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column",
              }}>
                {portfolioData.experience.map((job) => (
                  <Grid item xs={12} key={job.company}sx={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    flexDirection:"column",
                  }}>
                    <Fade direction="up" triggerOnce>
                      <Box sx={{ textAlign: 'right', p: 3, borderRight: `3px solid ${darkTheme.palette.primary.main}`, background: 'rgba(255,255,255,0.05)', borderRadius: '0 8px 8px 0' }}>
                        <Typography variant="h6">{job.role}</Typography>
                        <Typography variant="subtitle1" color="primary.main">{job.company}</Typography>
                        <Typography variant="caption" color="text.secondary" display="block" mb={1}>{job.period}</Typography>
                        <Typography variant="body2" color="text.secondary">{job.description}</Typography>
                      </Box>
                    </Fade>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Section>
        </Element>
        
        {/* بخش تماس با من */}
        <Element name="contact">
          <Section>
            <Container maxWidth="md">
              <Fade triggerOnce>
                <SectionTitle variant="h4">تماس با من</SectionTitle>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                  برای همکاری یا صحبت در مورد پروژه‌های خلاقانه، با من در ارتباط باشید.
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item xs={12} sm="auto">
                    <Box display="flex" alignItems="center" justifyContent="center">
                      <EmailIcon sx={{ ml: 1, color: 'primary.main' }} />
                      <Typography>{portfolioData.personalInfo.email}</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm="auto">
                    <Box display="flex" alignItems="center" justifyContent="center">
                      <PhoneIcon sx={{ ml: 1, color: 'primary.main' }} />
                      <Typography>{portfolioData.personalInfo.phone}</Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Box mt={4}>
                  <IconButton component="a" href={portfolioData.personalInfo.socials.linkedin} target="_blank" sx={{ color: 'text.primary', '&:hover': { color: 'primary.main' } }}>
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton component="a" href={portfolioData.personalInfo.socials.instagram} target="_blank" sx={{ color: 'text.primary', '&:hover': { color: 'primary.main' } }}>
                    <InstagramIcon />
                  </IconButton>
                </Box>
              </Fade>
            </Container>
          </Section>
        </Element>
      </Container>
      
      {/* فوتر */}
      <Footer>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} - تمامی حقوق برای {portfolioData.personalInfo.name} محفوظ است.
        </Typography>
      </Footer>
    </ThemeProvider>
  );
}

export default App;