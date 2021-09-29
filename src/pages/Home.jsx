/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch, useLocation } from "react-router-dom";
import { Card, CardImgOverlay, CardTitle, CardText, CardImg, CardGroup } from 'reactstrap';

import Footer from "../components/Footer/Footer.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
import RecipeCard from "../components/RecipeCard/RecipeCard.js";

import ROUTES from "../config/routes.js";

var ps;

function Home(props) {
  const [backgroundColor, setBackgroundColor] = React.useState("black");
  const [activeColor, setActiveColor] = React.useState("info");
  const [recipes, setRecipes] = React.useState([]);

  const mainPanel = React.useRef();
  const location = useLocation();
  React.useEffect(() => {
    async function getAllRecipes() {
      
      let response = await fetch('http://localhost:4001/recipe')
      response = await response.json()
          console.log(response)
          setRecipes(response)
     }
     getAllRecipes()
     if (navigator.platform.indexOf("Win") > -1) {
       ps = new PerfectScrollbar(mainPanel.current);
       document.body.classList.toggle("perfect-scrollbar-on");
      }
      return function cleanup() {
        if (navigator.platform.indexOf("Win") > -1) {
          ps.destroy();
          document.body.classList.toggle("perfect-scrollbar-on");
        }
      };
      
      
  },[]);
  // React.useEffect(() => {
  //   mainPanel.current.scrollTop = 0;
  //   document.scrollingElement.scrollTop = 0;
  // }, [location]);
  const handleActiveClick = (color) => {
    setActiveColor(color);
  };
  const handleBgClick = (color) => {
    setBackgroundColor(color);
  };
  return (
    <div className="wrapper">
      <div className="main-panel" >
        <Card className="bg-dark text-white">
            <CardImg 
            src="https://previews.123rf.com/images/krisckam/krisckam1705/krisckam170500022/78596281-international-mix-set-foods-top-view-on-table.jpg" 
            alt="..."
            style={{height: '470px', width: '100%', display: 'block'}}
            />
            <CardImgOverlay
            style={{
              position: 'absolute',
              // top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              padding: '1.25rem',
              borderRadius: '5.25rem',
            }}>
                <CardTitle className="h1 text-center">Recipe App</CardTitle>
                <CardText className="h6 text-center">Let’s rediscover some of our all-time favorite foods for a cozy fall!</CardText>
            </CardImgOverlay>
        </Card>
        <Switch>
          {ROUTES.map((prop, key) => {
            return (
              <Route
                path={prop.layout + prop.path}
                component={prop.component}
                key={key}
              />
            );
          })}
        </Switch>
        <CardGroup style={{alignContent:"center", padding:'0px'}}>
        {recipes.map((e) => (
          <RecipeCard
          key={e._id} 
          title={e.name}
          description={e.description}
          category={e.category}
          />
          )
        )}
        </CardGroup>
        <Footer fluid />
      </div>
    </div>
  );
}

export default Home;
