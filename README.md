## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

I) HTML Elements
  A) Add ingredients box CHECK
    1) Form CHECK
      a) Ingredient CHECK
      b) Quantity CHECK
      c) Measurement - dropdown CHECK
      d) Add Ingredient button  CHECK
  B) Display ingredients box CHECK
    1) UL CHECK
      a) li as appended CHECK
      b) remove last button CHECK
  C) Save Meal Box CHECK
    1) Input CHECK
    2) Save meal button CHECK
  D) Display Meal Box
    1) UL CHECK
      a) li as appended CHECK
II) Events
  A) Add ingredient button CHECK
    1) new FormData to create object CHECK
    2) Add object to ingredient array CHECK
    3) Loop through array to append ingredients objects CHECK
  B) Remove last item button  CHECK
    1) Clear li's from display CHECK
    2) Pop last ingredient off array CHECK
    2) Loop through array to append ingredients objects CHECK
  C) Save meal button CHECK
    1) create meal object CHECK
    2) Add meal object to meals array CHECK
    3) Loop through array to append meals CHECK
III) Feature Plan
  A) Ingredients box  CHECK
  B) Display ingredients box  CHECK
  C) Display ingredients functionality CHECK
    1) Get elements CHECK
      a) form data CHECK
      b) add ingredient button CHECK
      c) ul ingredients list  CHECK
    2) Eventlistener on button CHECK
    3) Create object from form data CHECK
    4) Add object to ingredient object array CHECK
    5) Append array to ul CHECK
  D) Remove button  CHECK
  E) Remove functionality CHECK
    1) Get element CHECK
      a) Button function CHECK
  F) Add meal box CHECK
  G) Display meal box CHECK
  H) Display meal functionality
    1) Get element CHECK
    2) Get button CHECK
    3) Button event listener
      a) Create object from data  CHECK
      b) Add object to ingredients objects array CHECK
    4) Render meal function CHECK

IV) State
  1) Array of ingredient objects CHECK
  2) Array of meal objects  CHECK

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
