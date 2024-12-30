import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="container">
      <div className="content">
        <button className="greenButton">Click me</button>
        <p className="blueText">This is a blue text</p>
        <p className="greenText">This is a green text</p>
        <h2>HTML Table</h2>
        <table className="styledTable">
          <thead>
            <tr>
              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>
            <tr>
              <td>Ernst Handel</td>
              <td>Roland Mendel</td>
              <td>Austria</td>
            </tr>
            <tr>
              <td>Island Trading</td>
              <td>Helen Bennett</td>
              <td>UK</td>
            </tr>
            <tr>
              <td>Laughing Bacchus Winecellars</td>
              <td>Yoshi Tannamuri</td>
              <td>Canada</td>
            </tr>
            <tr>
              <td>Magazzini Alimentari Riuniti</td>
              <td>Giovanni Rovelli</td>
              <td>Italy</td>
            </tr>
          </tbody>
        </table>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Creeperasha_Linux_test_image_upload.png" className="imageClass" alt="example"/>
    </div>
  )
}







