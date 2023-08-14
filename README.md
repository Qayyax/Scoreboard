# Scoreboard 

This was a solo project from Scrimba where I had to make an interactive scoreboard where the points increase by either 1, 2, or 3. 

### What I learnt from this Project

- I learnt how to use figma to check the size and color of elements as well as the font weight.
- I learnt how to convert text content from the DOM to numbers when trying to increment the numbers on the webpage. 
- I learnt how to use the DOM for click events whereby I used a function that had an argument.

```js
function addHome(points) {
  homeScore.textContent = Number(homeScore.textContent) + points;
}

function addGuest(points) {
  guestScore.textContent = Number(guestScore.textContent) + points;
}
```
and in the `HTML` 

```html
        <div class="function">
            <button onclick="addHome(1)">+1</button>
            <button onclick="addHome(2)">+2</button>
            <button onclick="addHome(3)">+3</button>
          </div>
        </div>
        <div class="home">
          <h1>Guest</h1>
          <div class="score">
            <p class="guest-score">0</p>
          </div>
          <div class="function">
            <button onclick="addGuest(1)">+1</button>
            <button onclick="addGuest(2)">+2</button>
            <button onclick="addGuest(3)">+3</button>
          </div>
        </div>
      </div>

```

> Thank you for following my progress


