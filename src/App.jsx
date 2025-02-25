import React from "react";
import "./styles/main.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { lazy } from "react";

const Welcome = lazy(() => import("./pages/Welcome"))
const StepOne = lazy(() => import("./pages/StepOne"))
const StepTwo = lazy(() => import("./pages/StepTwo"))
const StepThree = lazy(() => import("./pages/StepThree"))
const StepFour = lazy(() => import("./pages/StepFour"))
const Thanks = lazy(() => import("./pages/Thanks"))




const App = () => {
return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<Welcome/>}/>
  <Route path="/step-One" element={<StepOne/>}/>
  <Route path="/step-Two" element={<StepTwo/>}/>
  <Route path="/step-Three" element={<StepThree/>}/>
  <Route path="/step-Four" element={<StepFour/>}/>
  <Route path="/thanks" element={<Thanks/>}/>
</Routes>
</BrowserRouter>
);
};
export default App;
