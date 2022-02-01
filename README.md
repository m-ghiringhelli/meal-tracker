## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

I) HTML Elements
  A) Add ingredients box
    1) Form
      a) Ingredient
      b) Quantity
      c) Measurement - dropdown
      d) Add Ingredient button
  B) Display ingredients box
    1) UL
      a) li as appended
      b) remove last button
  C) Save Meal Box
    1) Input
    2) Save meal button
  D) Display Meal Box
    1) UL
      a) li as appended
II) Events
  A) Add ingredient button
    1) new FormData to create object
    2) Add object to ingredient array
    3) Loop through array to append ingredients objects
  B) Remove last item button
    1) Clear li's from display
    2) Pop last ingredient off array
    2) Loop through array to append ingredients objects
  C) Save meal button
    1) create meal object
    2) Add meal object to meals array
    3) Loop through array to append meals
III) Feature Plan
  1) Ingredients box
  2) Display
  3) Remove
  4) Meal box
  5) Display
IV) State
  1) Array of ingredient objects
  2) Array of meal objects

1) **Make a drawing of your app. Simple "wireframes"**
1) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
