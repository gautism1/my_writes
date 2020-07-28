import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
const Nav = lazy(() => import('./components/nav'));
const HeroHeader =lazy(()=> import('./components/heroheader'))
const Blogs=lazy(()=>import('./components/blogs'))
const Contact =lazy(()=> import ('./components/contact'))
const  Footer =lazy(()=> import ('./components/footer'))


const renderLoader = () =>  <div >
<h1>Loading...
please wait
</h1>
</div>;

function App() {
  return (
<Router>
   <Suspense  
            fallback={renderLoader()}>
    <div className="App">
                 <Nav/>
                 <div className="this">
                 <Switch>
                     <Route path="/" exact component={HeroHeader} />
                     <Route path="/Blogs" component={Blogs} />
                    
                     <Route path="/Contact" component={Contact}/>
                </Switch>
                 </div>
                 <Footer/>
    </div>
    </Suspense>
     </Router>
  );
}

export default App;
