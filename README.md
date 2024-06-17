# Country-Capital Matching Game

This is a simple matching game where users need to match countries with their capitals.

## Functional Requirements

- Implement a component `<Game />` that receives an object `data` as a prop.
- Each key of the object represents a country and the corresponding value is its capital.
- Render the list of countries and capitals in random order on the UI.
- Users can select two options. The default border color of an option should be `#414141`.
- Selected option should have a blue border.
- If the user selection is correct, the selected options' border color should change to `#66cc99` and both options should disappear from the screen after 1000 ms.
- If the user selection is incorrect, the selected options' border color should change to red and reset after 1000 ms.
- When there are no options left on the screen, show a message "Congratulations".

## Screenshots

### Initial Screen with All Options in Random Order
![Initial Screen](https://ik.imagekit.io/devtoolstech/question-images/country-capital-game/Screenshot%202024-02-03%20at%208.34.44%20PM_M8940Rm4kn.png)

### Selected Options
![Selected Options](https://ik.imagekit.io/devtoolstech/question-images/country-capital-game/Screenshot%202024-02-03%20at%208.35.20%20PM_aszC8p_1cM.png)

### Incorrect Options
![Incorrect Options](https://ik.imagekit.io/devtoolstech/question-images/country-capital-game/Screenshot%202024-02-03%20at%208.35.01%20PM_zQMadKasuO.png?updatedAt=1706972853185)

### Correct Options
![Correct Options](https://ik.imagekit.io/devtoolstech/question-images/country-capital-game/Screenshot%202024-02-03%20at%208.35.38%20PM_toW7pNN3M.png)

### Remaining Options
![Remaining Options](https://ik.imagekit.io/devtoolstech/question-images/country-capital-game/Screenshot%202024-02-03%20at%208.35.51%20PM_yiAO4aTDi.png)

### Final Screen
![Final Screen](https://ik.imagekit.io/devtoolstech/question-images/country-capital-game/Screenshot%202024-02-03%20at%208.42.01%20PM_nSvt2ckL-.png)

## How to Run

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
