import * as PIXI from 'pixi.js';
import Papa from 'papaparse';

// Create PixiJS Application
const app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0x1099bb,
});
document.getElementById('game-container').appendChild(app.view);

// Load CSV Data
Papa.parse('src/data.csv', {
    download: true,
    header: true,
    complete: function(results) {
        console.log(results.data);
        // TODO: Visualize data with PixiJS
    }
});
