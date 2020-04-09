const topics = [
  {
    id: 'bd7123c8c441eddfaeb5bdef',
    title: 'Say Hello to HTML Elements',
  },
  {
    id: 'bad87fee1348bd9aedf0887a',
    title: 'Headline with the h2 Element',
  },
  {
    id: 'bad87fee1348bd9aedf08801',
    title: 'Inform with the Paragraph Element',
  },
  {
    id: 'bad87fee1348bd9aedf08833',
    title: 'Fill in the Blank with Placeholder Text',
  },
  {
    id: 'bad87fee1348bd9aedf08802',
    title: 'Uncomment HTML',
  },
  {
    id: 'bad87fee1348bd9aedf08804',
    title: 'Comment out HTML',
  },
  {
    id: 'bad87fed1348bd9aedf08833',
    title: 'Delete HTML Elements',
  },
  {
    id: 'bad87fee1348bd9aecf08801',
    title: 'Introduction to HTML5 Elements',
  },
  {
    id: 'bad87fee1348bd9aedf08812',
    title: 'Add Images to Your Website',
  },
  {
    id: 'bad87fee1348bd9aedf08816',
    title: 'Link to External Pages with Anchor Elements',
  },
  {
    id: 'bad88fee1348bd9aedf08816',
    title: 'Link to Internal Sections of a Page with Anchor Elements',
  },
  {
    id: 'bad87fee1348bd9aede08817',
    title: 'Nest an Anchor Element within a Paragraph',
  },
  {
    id: 'bad87fee1348bd9aedf08817',
    title: 'Make Dead Links Using the Hash Symbol',
  },
  {
    id: 'bad87fee1348bd9aedf08820',
    title: 'Turn an Image into a Link',
  },
  {
    id: 'bad87fee1348bd9aedf08827',
    title: 'Create a Bulleted Unordered List',
  },
  {
    id: 'bad87fee1348bd9aedf08828',
    title: 'Create an Ordered List',
  },
  {
    id: 'bad87fee1348bd9aedf08829',
    title: 'Create a Text Field',
  },
  {
    id: 'bad87fee1348bd9aedf08830',
    title: 'Add Placeholder Text to a Text Field',
  },
  {
    id: 'bad87fee1348bd9aede08830',
    title: 'Create a Form Element',
  },
  {
    id: 'bad87fee1348bd9aedd08830',
    title: 'Add a Submit Button to a Form',
  },
  {
    id: 'bad87fee1348bd9aedc08830',
    title: 'Use HTML5 to Require a Field',
  },
  {
    id: 'bad87fee1348bd9aedf08834',
    title: 'Create a Set of Radio Buttons',
  },
  {
    id: 'bad87fee1348bd9aedf08835',
    title: 'Create a Set of Checkboxes',
  },
  {
    id: '5c6c06847491271903d37cfd',
    title: 'Use the value attribute with Radio Buttons and Checkboxes',
  },
  {
    id: 'bad87fee1348bd9aedd08835',
    title: 'Check Radio Buttons and Checkboxes by Default',
  },
  {
    id: 'bad87fee1348bd9aede08835',
    title: 'Nest Many Elements within a Single div Element',
  },
  {
    id: '587d78aa367417b2b2512aed',
    title: 'Declare the Doctype of an HTML Document',
  },
  {
    id: '587d78aa367417b2b2512aec',
    title: 'Define the Head and Body of an HTML Document',
  },
  {
    id: 'bad87fee1348bd9aedf08803',
    title: 'Change the Color of Text',
  },
  {
    id: 'bad87fee1348bd9aedf08805',
    title: 'Use CSS Selectors to Style Elements',
  },
  {
    id: 'bad87fee1348bd9aecf08806',
    title: 'Use a CSS Class to Style an Element',
  },
  {
    id: 'bad87fee1348bd9aefe08806',
    title: 'Style Multiple Elements with a CSS Class',
  },
  {
    id: 'bad87fee1348bd9aedf08806',
    title: 'Change the Font Size of an Element',
  },
  {
    id: 'bad87fee1348bd9aede08807',
    title: 'Set the Font Family of an Element',
  },
  {
    id: 'bad87fee1348bd9aedf08807',
    title: 'Import a Google Font',
  },
  {
    id: 'bad87fee1348bd9aedf08808',
    title: 'Specify How Fonts Should Degrade',
  },
  {
    id: 'bad87fee1348bd9acdf08812',
    title: 'Size Your Images',
  },
  {
    id: 'bad87fee1348bd9bedf08813',
    title: 'Add Borders Around Your Elements',
  },
  {
    id: 'bad87fee1348bd9aedf08814',
    title: 'Add Rounded Corners with border-radius',
  },
  {
    id: 'bad87fee1348bd9aedf08815',
    title: 'Make Circular Images with a border-radius',
  },
  {
    id: 'bad87fed1348bd9aede07836',
    title: 'Give a Background Color to a div Element',
  },
  {
    id: 'bad87eee1348bd9aede07836',
    title: 'Set the id of an Element',
  },
  {
    id: 'bad87dee1348bd9aede07836',
    title: 'Use an id Attribute to Style an Element',
  },
  {
    id: 'bad88fee1348bd9aedf08825',
    title: 'Adjust the Padding of an Element',
  },
  {
    id: 'bad87fee1348bd9aedf08822',
    title: 'Adjust the Margin of an Element',
  },
  {
    id: 'bad87fee1348bd9aedf08823',
    title: 'Add a Negative Margin to an Element',
  },
  {
    id: 'bad87fee1348bd9aedf08824',
    title: 'Add Different Padding to Each Side of an Element',
  },
  {
    id: 'bad87fee1248bd9aedf08824',
    title: 'Add Different Margins to Each Side of an Element',
  },
  {
    id: 'bad87fee1348bd9aedf08826',
    title: 'Use Clockwise Notation to Specify the Padding of an Element',
  },
  {
    id: 'bad87fee1348bd9afdf08726',
    title: 'Use Clockwise Notation to Specify the Margin of an Element',
  },
  {
    id: '58c383d33e2e3259241f3076',
    title: 'Use Attribute Selectors to Style Elements',
  },
  {
    id: 'bad82fee1322bd9aedf08721',
    title: 'Understand Absolute versus Relative Units',
  },
  {
    id: 'bad87fee1348bd9aedf08736',
    title: 'Style the HTML Body Element',
  },
  {
    id: 'bad87fee1348bd9aedf08746',
    title: 'Inherit Styles from the Body Element',
  },
  {
    id: 'bad87fee1348bd9aedf08756',
    title: 'Prioritize One Style Over Another',
  },
  {
    id: 'bad87fee1348bd9aedf04756',
    title: 'Override Styles in Subsequent CSS',
  },
  {
    id: 'bad87fee1348bd8aedf06756',
    title: 'Override Class Declarations by Styling ID Attributes',
  },
  {
    id: 'bad87fee1348bd9aedf06756',
    title: 'Override Class Declarations with Inline Styles',
  },
  {
    id: 'bad87fee1348bd9aedf07756',
    title: 'Override All Other Styles by using Important',
  },
  {
    id: 'bad87fee1348bd9aedf08726',
    title: 'Use Hex Code for Specific Colors',
  },
  {
    id: 'bad87fee1348bd9aedf08721',
    title: 'Use Hex Code to Mix Colors',
  },
  {
    id: 'bad87fee1348bd9aedf08719',
    title: 'Use Abbreviated Hex Code',
  },
  {
    id: 'bad87fee1348bd9aede08718',
    title: 'Use RGB values to Color Elements',
  },
  {
    id: 'bad82fee1348bd9aedf08721',
    title: 'Use RGB to Mix Colors',
  },
  {
    id: '5a9d725e424fe3d0e10cad10',
    title: 'Use CSS Variables to change several elements at once',
  },
  {
    id: '5a9d726c424fe3d0e10cad11',
    title: 'Create a custom CSS Variable',
  },
  {
    id: '5a9d727a424fe3d0e10cad12',
    title: 'Use a custom CSS Variable',
  },
  {
    id: '5a9d7286424fe3d0e10cad13',
    title: 'Attach a Fallback value to a CSS Variable',
  },
  {
    id: '5b7d72c338cd7e35b63f3e14',
    title: 'Improve Compatibility with Browser Fallbacks',
  },
  {
    id: '5a9d7295424fe3d0e10cad14',
    title: 'Inherit CSS Variables',
  },
  {
    id: '5a9d72a1424fe3d0e10cad15',
    title: 'Change a variable for a specific area',
  },
  {
    id: '5a9d72ad424fe3d0e10cad16',
    title: 'Use a media query to change a variable',
  },
  {
    id: '587d7791367417b2b2512ab3',
    title: 'Create Visual Balance Using the text-align Property',
  },
  {
    id: '587d7791367417b2b2512ab4',
    title: 'Adjust the Width of an Element Using the width Property',
  },
  {
    id: '587d7791367417b2b2512ab5',
    title: 'Adjust the Height of an Element Using the height Property',
  },
  {
    id: '587d781a367417b2b2512ab7',
    title: 'Use the strong Tag to Make Text Bold',
  },
  {
    id: '587d781a367417b2b2512ab8',
    title: 'Use the u Tag to Underline Text',
  },
  {
    id: '587d781a367417b2b2512ab9',
    title: 'Use the em Tag to Italicize Text',
  },
  {
    id: '587d781b367417b2b2512aba',
    title: 'Use the s Tag to Strikethrough Text',
  },
  {
    id: '587d781b367417b2b2512abb',
    title: 'Create a Horizontal Line Using the hr Element',
  },
  {
    id: '587d781b367417b2b2512abc',
    title: 'Adjust the background-color Property of Text',
  },
  {
    id: '587d781b367417b2b2512abd',
    title: 'Adjust the Size of a Header Versus a Paragraph Tag',
  },
  {
    id: '587d781b367417b2b2512abe',
    title: 'Add a box-shadow to a Card-like Element',
  },
  {
    id: '587d781c367417b2b2512abf',
    title: 'Decrease the Opacity of an Element',
  },
  {
    id: '587d781c367417b2b2512ac0',
    title: 'Use the text-transform Property to Make Text Uppercase',
  },
  {
    id: '587d781c367417b2b2512ac2',
    title: 'Set the font-size for Multiple Heading Elements',
  },
  {
    id: '587d781c367417b2b2512ac3',
    title: 'Set the font-weight for Multiple Heading Elements',
  },
  {
    id: '587d781c367417b2b2512ac4',
    title: 'Set the font-size of Paragraph Text',
  },
  {
    id: '587d781d367417b2b2512ac5',
    title: 'Set the line-height of Paragraphs',
  },
  {
    id: '587d781d367417b2b2512ac8',
    title: 'Adjust the Hover State of an Anchor Tag',
  },
  {
    id: '587d781e367417b2b2512ac9',
    title: "Change an Element's Relative Position",
  },
  {
    id: '587d781e367417b2b2512aca',
    title: 'Move a Relatively Positioned Element with CSS Offsets',
  },
  {
    id: '587d781e367417b2b2512acb',
    title: 'Lock an Element to its Parent with Absolute Positioning',
  },
  {
    id: '587d781e367417b2b2512acc',
    title: 'Lock an Element to the Browser Window with Fixed Positioning',
  },
  {
    id: '587d78a3367417b2b2512ace',
    title: 'Push Elements Left or Right with the float Property',
  },
  {
    id: '587d78a3367417b2b2512acf',
    title:
      'Change the Position of Overlapping Elements with the z-index Property',
  },
  {
    id: '587d78a3367417b2b2512ad0',
    title: 'Center an Element Horizontally Using the margin Property',
  },
  {
    id: '587d78a3367417b2b2512ad1',
    title: 'Learn about Complementary Colors',
  },
  {
    id: '587d78a4367417b2b2512ad2',
    title: 'Learn about Tertiary Colors',
  },
  {
    id: '587d78a4367417b2b2512ad3',
    title: 'Adjust the Color of Various Elements to Complementary Colors',
  },
  {
    id: '587d78a4367417b2b2512ad4',
    title: 'Adjust the Hue of a Color',
  },
  {
    id: '587d78a4367417b2b2512ad5',
    title: 'Adjust the Tone of a Color',
  },
  {
    id: '587d78a5367417b2b2512ad6',
    title: 'Create a Gradual CSS Linear Gradient',
  },
  {
    id: '587d78a5367417b2b2512ad7',
    title: 'Use a CSS Linear Gradient to Create a Striped Element',
  },
  {
    id: '587d78a5367417b2b2512ad8',
    title: 'Create Texture by Adding a Subtle Pattern as a Background Image',
  },
  {
    id: '587d78a5367417b2b2512ad9',
    title:
      'Use the CSS Transform scale Property to Change the Size of an Element',
  },
  {
    id: '587d78a5367417b2b2512ada',
    title: 'Use the CSS Transform scale Property to Scale an Element on Hover',
  },
  {
    id: '587d78a6367417b2b2512adb',
    title:
      'Use the CSS Transform Property skewX to Skew an Element Along the X-Axis',
  },
  {
    id: '587d78a6367417b2b2512adc',
    title:
      'Use the CSS Transform Property skewY to Skew an Element Along the Y-Axis',
  },
  {
    id: '587d78a6367417b2b2512add',
    title: 'Create a Graphic Using CSS',
  },
  {
    id: '587d78a6367417b2b2512ade',
    title: 'Create a More Complex Shape Using CSS and HTML',
  },
  {
    id: '587d78a7367417b2b2512adf',
    title: 'Learn How the CSS @keyframes and animation Properties Work',
  },
  {
    id: '587d78a7367417b2b2512ae0',
    title: 'Use CSS Animation to Change the Hover State of a Button',
  },
  {
    id: '58a7a6ebf9a6318348e2d5aa',
    title: 'Modify Fill Mode of an Animation',
  },
  {
    id: '587d78a7367417b2b2512ae1',
    title: 'Create Movement Using CSS Animation',
  },
  {
    id: '587d78a7367417b2b2512ae2',
    title: 'Create Visual Direction by Fading an Element from Left to Right',
  },
  {
    id: '587d78a8367417b2b2512ae3',
    title: 'Animate Elements Continually Using an Infinite Animation Count',
  },
  {
    id: '587d78a8367417b2b2512ae4',
    title: 'Make a CSS Heartbeat using an Infinite Animation Count',
  },
  {
    id: '587d78a8367417b2b2512ae5',
    title: 'Animate Elements at Variable Rates',
  },
  {
    id: '587d78a8367417b2b2512ae6',
    title: 'Animate Multiple Elements at Variable Rates',
  },
  {
    id: '587d78a8367417b2b2512ae7',
    title: 'Change Animation Timing with Keywords',
  },
  {
    id: '587d78a9367417b2b2512ae8',
    title: 'Learn How Bezier Curves Work',
  },
  {
    id: '587d78a9367417b2b2512ae9',
    title: 'Use a Bezier Curve to Move a Graphic',
  },
  {
    id: '587d78a9367417b2b2512aea',
    title: 'Make Motion More Natural Using a Bezier Curve',
  },
  {
    id: '587d774c367417b2b2512a9c',
    title:
      'Add a Text Alternative to Images for Visually Impaired Accessibility',
  },
  {
    id: '587d774c367417b2b2512a9d',
    title: 'Know When Alt Text Should be Left Blank',
  },
  {
    id: '587d774d367417b2b2512a9e',
    title: 'Use Headings to Show Hierarchical Relationships of Content',
  },
  {
    id: '587d774e367417b2b2512a9f',
    title: 'Jump Straight to the Content Using the main Element',
  },
  {
    id: '587d774e367417b2b2512aa0',
    title: 'Wrap Content in the article Element',
  },
  {
    id: '587d7787367417b2b2512aa1',
    title: 'Make Screen Reader Navigation Easier with the header Landmark',
  },
  {
    id: '587d7788367417b2b2512aa2',
    title: 'Make Screen Reader Navigation Easier with the nav Landmark',
  },
  {
    id: '587d7788367417b2b2512aa3',
    title: 'Make Screen Reader Navigation Easier with the footer Landmark',
  },
  {
    id: '587d7789367417b2b2512aa4',
    title: 'Improve Accessibility of Audio Content with the audio Element',
  },
  {
    id: '587d778a367417b2b2512aa5',
    title: 'Improve Chart Accessibility with the figure Element',
  },
  {
    id: '587d778a367417b2b2512aa6',
    title: 'Improve Form Field Accessibility with the label Element',
  },
  {
    id: '587d778b367417b2b2512aa7',
    title: 'Wrap Radio Buttons in a fieldset Element for Better Accessibility',
  },
  {
    id: '587d778b367417b2b2512aa8',
    title: 'Add an Accessible Date Picker',
  },
  {
    id: '587d778c367417b2b2512aa9',
    title: 'Standardize Times with the HTML5 datetime Attribute',
  },
  {
    id: '587d778d367417b2b2512aaa',
    title: 'Make Elements Only Visible to a Screen Reader by Using Custom CSS',
  },
  {
    id: '587d778e367417b2b2512aab',
    title: 'Improve Readability with High Contrast Text',
  },
  {
    id: '587d778f367417b2b2512aac',
    title: 'Avoid Colorblindness Issues by Using Sufficient Contrast',
  },
  {
    id: '587d778f367417b2b2512aad',
    title:
      'Avoid Colorblindness Issues by Carefully Choosing Colors that Convey Information',
  },
  {
    id: '587d778f367417b2b2512aae',
    title: 'Give Links Meaning by Using Descriptive Link Text',
  },
  {
    id: '587d7790367417b2b2512aaf',
    title: 'Make Links Navigable with HTML Access Keys',
  },
  {
    id: '587d7790367417b2b2512ab0',
    title: 'Use tabindex to Add Keyboard Focus to an Element',
  },
  {
    id: '587d7790367417b2b2512ab1',
    title:
      'Use tabindex to Specify the Order of Keyboard Focus for Several Elements',
  },
  {
    id: '587d78b0367417b2b2512b08',
    title: 'Create a Media Query',
  },
  {
    id: '587d78b1367417b2b2512b09',
    title: 'Make an Image Responsive',
  },
  {
    id: '587d78b1367417b2b2512b0a',
    title: 'Use a Retina Image for Higher Resolution Displays',
  },
  {
    id: '587d78b1367417b2b2512b0c',
    title: 'Make Typography Responsive',
  },
  {
    id: '587d78ab367417b2b2512af0',
    title: 'Use display: flex to Position Two Boxes',
  },
  {
    id: '587d78ab367417b2b2512af1',
    title: 'Add Flex Superpowers to the Tweet Embed',
  },
  {
    id: '587d78ab367417b2b2512af2',
    title: 'Use the flex-direction Property to Make a Row',
  },
  {
    id: '587d78ab367417b2b2512af3',
    title:
      'Apply the flex-direction Property to Create Rows in the Tweet Embed',
  },
  {
    id: '587d78ac367417b2b2512af4',
    title: 'Use the flex-direction Property to Make a Column',
  },
  {
    id: '587d78ac367417b2b2512af5',
    title:
      'Apply the flex-direction Property to Create a Column in the Tweet Embed',
  },
  {
    id: '587d78ac367417b2b2512af6',
    title: 'Align Elements Using the justify-content Property',
  },
  {
    id: '587d78ac367417b2b2512af7',
    title: 'Use the justify-content Property in the Tweet Embed',
  },
  {
    id: '587d78ad367417b2b2512af8',
    title: 'Align Elements Using the align-items Property',
  },
  {
    id: '587d78ad367417b2b2512af9',
    title: 'Use the align-items Property in the Tweet Embed',
  },
  {
    id: '587d78ad367417b2b2512afa',
    title: 'Use the flex-wrap Property to Wrap a Row or Column',
  },
  {
    id: '587d78ad367417b2b2512afb',
    title: 'Use the flex-shrink Property to Shrink Items',
  },
  {
    id: '587d78ae367417b2b2512afc',
    title: 'Use the flex-grow Property to Expand Items',
  },
  {
    id: '587d78ae367417b2b2512afd',
    title: 'Use the flex-basis Property to Set the Initial Size of an Item',
  },
  {
    id: '587d78ae367417b2b2512afe',
    title: 'Use the flex Shorthand Property',
  },
  {
    id: '587d78ae367417b2b2512aff',
    title: 'Use the order Property to Rearrange Items',
  },
  {
    id: '587d78af367417b2b2512b00',
    title: 'Use the align-self Property',
  },
  {
    id: '5a858944d96184f06fd60d61',
    title: 'Create Your First CSS Grid',
  },
  {
    id: '5a9036d038fddaf9a66b5d32',
    title: 'Add Columns with grid-template-columns',
  },
  {
    id: '5a9036e138fddaf9a66b5d33',
    title: 'Add Rows with grid-template-rows',
  },
  {
    id: '5a9036ee38fddaf9a66b5d34',
    title: 'Use CSS Grid units to Change the Size of Columns and Rows',
  },
  {
    id: '5a9036ee38fddaf9a66b5d35',
    title: 'Create a Column Gap Using grid-column-gap',
  },
  {
    id: '5a9036ee38fddaf9a66b5d36',
    title: 'Create a Row Gap using grid-row-gap',
  },
  {
    id: '5a9036ee38fddaf9a66b5d37',
    title: 'Add Gaps Faster with grid-gap',
  },
  {
    id: '5a90372638fddaf9a66b5d38',
    title: 'Use grid-column to Control Spacing',
  },
  {
    id: '5a90373638fddaf9a66b5d39',
    title: 'Use grid-row to Control Spacing',
  },
  {
    id: '5a90374338fddaf9a66b5d3a',
    title: 'Align an Item Horizontally using justify-self',
  },
  {
    id: '5a90375238fddaf9a66b5d3b',
    title: 'Align an Item Vertically using align-self',
  },
  {
    id: '5a90376038fddaf9a66b5d3c',
    title: 'Align All Items Horizontally using justify-items',
  },
  {
    id: '5a94fdf869fb03452672e45b',
    title: 'Align All Items Vertically using align-items',
  },
  {
    id: '5a94fe0569fb03452672e45c',
    title: 'Divide the Grid Into an Area Template',
  },
  {
    id: '5a94fe1369fb03452672e45d',
    title: 'Place Items in Grid Areas Using the grid-area Property',
  },
  {
    id: '5a94fe2669fb03452672e45e',
    title: 'Use grid-area Without Creating an Areas Template',
  },
  {
    id: '5a94fe3669fb03452672e45f',
    title: 'Reduce Repetition Using the repeat Function',
  },
  {
    id: '5a94fe4469fb03452672e460',
    title: 'Limit Item Size Using the minmax Function',
  },
  {
    id: '5a94fe5469fb03452672e461',
    title: 'Create Flexible Layouts Using auto-fill',
  },
  {
    id: '5a94fe6269fb03452672e462',
    title: 'Create Flexible Layouts Using auto-fit',
  },
  {
    id: '5a94fe7769fb03452672e463',
    title: 'Use Media Queries to Create Responsive Layouts',
  },
  {
    id: '5a94fe8569fb03452672e464',
    title: 'Create Grids within Grids',
  },
  {
    id: 'bd7158d8c442eddfaeb5bd18',
    title: 'Build a Tribute Page',
  },
  {
    id: '587d78af367417b2b2512b03',
    title: 'Build a Survey Form',
  },
  {
    id: '587d78af367417b2b2512b04',
    title: 'Build a Product Landing Page',
  },
  {
    id: '587d78b0367417b2b2512b05',
    title: 'Build a Technical Documentation Page',
  },
  {
    id: 'bd7158d8c242eddfaeb5bd13',
    title: 'Build a Personal Portfolio Webpage',
  },
  {
    id: 'bd7123c9c441eddfaeb4bdef',
    title: 'Comment Your JavaScript Code',
  },
  {
    id: 'bd7123c9c443eddfaeb5bdef',
    title: 'Declare JavaScript Variables',
  },
  {
    id: '56533eb9ac21ba0edf2244a8',
    title: 'Storing Values with the Assignment Operator',
  },
  {
    id: '56533eb9ac21ba0edf2244a9',
    title: 'Initializing Variables with the Assignment Operator',
  },
  {
    id: '56533eb9ac21ba0edf2244aa',
    title: 'Understanding Uninitialized Variables',
  },
  {
    id: '56533eb9ac21ba0edf2244ab',
    title: 'Understanding Case Sensitivity in Variables',
  },
];

module.exports = topics;
