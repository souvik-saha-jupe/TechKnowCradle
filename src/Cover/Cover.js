import React from "react";
import './Cover.css';
import MyComponent from "./Animation";



export default function Cover() {
  return (
    <>
    <div class="bg-image">
    <img src="/jusc-only-logo.png" object-fit= 'cover' loading="lazy" alt="logo" />
  <h3 style={{color:'#fff'}}>presents</h3>
    <h1 class="ml10">
      <span class="text-wrapper">
      
        <span class="letters">TechKnowCradle</span>
        <MyComponent/>
      </span>
    </h1>
    </div>
      
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
    <script src="CoverAnime.js"></script>
    </>
  );
}
