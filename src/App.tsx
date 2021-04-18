import React from 'react';
import { Link, Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const Page1 = () => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div style={{ ...styles.page, ...styles.page1 }}>
        <p style={styles.copy}>This is page 1</p>
        <Link style={{ ...styles.copy, ...styles.link }} to="/page2">
          Go to Page 2
        </Link>
      </div>
    </motion.div>
  );
};

const Page2 = () => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div style={{ ...styles.page, ...styles.page2 }}>
        <p style={styles.copy}>This is page 2</p>
        <Link style={{ ...styles.copy, ...styles.link }} to="/page1">
          Go to Page 1
        </Link>
      </div>
    </motion.div>
  );
};

const App = () => {
  const currentLocation = useLocation();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={currentLocation} key={currentLocation.pathname}>
        <Route exact path="/">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="container">
              <Link style={{ ...styles.copy, ...styles.link }} to="/page1">
                <h1>Go to Page 1</h1>
              </Link>
            </div>
          </motion.div>
        </Route>

        <Route exact path="/page1">
          <Page1 />
        </Route>
        <Route exact path="/page2">
          <Page2 />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

const styles: Record<string, React.CSSProperties> = {
  page: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    flexGrow: 1,
  },

  page1: {
    backgroundColor: '#101D42',
  },

  page2: {
    backgroundColor: '#3267B2',
  },

  copy: {
    color: 'white',
    fontFamily: 'Helvetica Neue, sans-serif',
    fontWeight: 'bold',
    fontSize: 32,
  },

  link: {
    color: 'white',
    display: 'block',
    marginTop: 100,
  },
};

export default App;
