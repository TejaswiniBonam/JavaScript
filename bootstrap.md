**Bootstrap** is a popular open-source front-end framework for developing responsive and mobile-first websites. It provides pre-designed HTML, CSS, and JavaScript components such as navigation bars, buttons, forms, and modals, making it easier and faster to build modern web interfaces.

Key features:
- Responsive grid system
- Extensive set of UI components
- Customizable via Sass variables
- Built-in JavaScript plugins

Official website: [https://getbootstrap.com/](https://getbootstrap.com/)



### Bootstrap Button Classes

- **`.btn`**: Base class for all Bootstrap buttons.
- **`.btn-primary`**: Indicates primary action, styled with the theme’s main color.
- **`.btn-secondary`**: Represents a secondary action, usually a muted color.
- **`.btn-success`**: Used for successful or positive actions, typically green.
- **`.btn-danger`**: Indicates a dangerous or potentially negative action, usually red.
- **`.btn-warning`**: Highlights actions that need caution, often yellow or orange.
- **`.btn-info`**: Used for informational actions, styled with a light blue.
- **`.btn-light`**: For less emphasis, uses a light background.
- **`.btn-dark`**: For dark backgrounds or strong emphasis.
- **`.btn-link`**: Styles the button to look like a hyperlink.
- **`.btn-outline-*`**: Outline versions of the above, with colored borders and transparent backgrounds.


### Bootstrap Form Classes

- **`.form-control`**: Styles text inputs, textareas, and selects for consistent appearance.
- **`.form-group`**: Wraps labels and controls for proper spacing.
- **`.form-check`**: Styles checkboxes and radio buttons.
- **`.form-label`**: Styles labels for form controls.
- **`.form-select`**: Styles select dropdowns.
- **`.input-group`**: Groups inputs and add-ons like buttons or text.

### Bootstrap Alert Classes

- **`.alert`**: Base class for alert messages.
- **`.alert-primary`**: Primary alert, styled with the main theme color.
- **`.alert-secondary`**: Secondary alert, muted color.
- **`.alert-success`**: Success alert, typically green.
- **`.alert-danger`**: Danger alert, usually red.
- **`.alert-warning`**: Warning alert, yellow or orange.
- **`.alert-info`**: Informational alert, light blue.
- **`.alert-light`**: Light background alert.
- **`.alert-dark`**: Dark background alert.

### Bootstrap Card Classes

- **`.card`**: Base class for card containers.
- **`.card-body`**: Main content area inside a card.
- **`.card-title`**: Title text within a card.
- **`.card-text`**: Regular text within a card.
- **`.card-header`**: Header section of a card.
- **`.card-footer`**: Footer section of a card.
- **`.card-img-top`**: Image at the top of a card.

### Bootstrap Navbar Classes

- **`.navbar`**: Base class for navigation bars.
- **`.navbar-brand`**: Branding/logo area in the navbar.
- **`.navbar-nav`**: Container for navigation links.
- **`.nav-item`**: Individual navigation item.
- **`.nav-link`**: Styles navigation links.
- **`.navbar-toggler`**: Button for toggling collapsed navbar content.
- **`.navbar-collapse`**: Collapsible content area in the navbar.


### Bootstrap Table Classes

- **`.table`**: Base class for styling tables.
- **`.table-striped`**: Adds zebra-striping to rows.
- **`.table-bordered`**: Adds borders to all table cells.
- **`.table-hover`**: Highlights rows on hover.
- **`.table-sm`**: Makes tables more compact.
- **`.table-dark`**: Inverts table colors for dark backgrounds.
- **`.table-responsive`**: Makes tables horizontally scrollable on small screens.

### Bootstrap Modal Classes

- **`.modal`**: Base class for modal dialogs.
- **`.modal-dialog`**: Container for modal content.
- **`.modal-content`**: Wrapper for modal elements.
- **`.modal-header`**: Header section of the modal.
- **`.modal-body`**: Main content area of the modal.
- **`.modal-footer`**: Footer section for actions.

### Bootstrap Badge Classes

- **`.badge`**: Base class for badges.
- **`.badge-primary`**: Primary colored badge.
- **`.badge-secondary`**: Secondary colored badge.
- **`.badge-success`**: Success (green) badge.
- **`.badge-danger`**: Danger (red) badge.
- **`.badge-warning`**: Warning (yellow/orange) badge.
- **`.badge-info`**: Info (blue) badge.
- **`.badge-light`**: Light colored badge.
- **`.badge-dark`**: Dark colored badge.


### Bootstrap Background Color Classes

- **`.bg-primary`**: Applies the primary theme background color.
- **`.bg-secondary`**: Applies the secondary theme background color.
- **`.bg-success`**: Applies a green background for success.
- **`.bg-danger`**: Applies a red background for danger.
- **`.bg-warning`**: Applies a yellow/orange background for warnings.
- **`.bg-info`**: Applies a light blue background for informational content.
- **`.bg-light`**: Applies a light gray background.
- **`.bg-dark`**: Applies a dark background.
- **`.bg-white`**: Applies a white background.
- **`.bg-transparent`**: Makes the background transparent.


### Bootstrap Progress Classes

- **`.progress`**: Container for progress bars.
- **`.progress-bar`**: Actual progress bar element.
- **`.progress-bar-striped`**: Adds stripes to the progress bar.
- **`.progress-bar-animated`**: Animates the stripes on the progress bar.

### Bootstrap Utility Classes

- **`.m-*`, `.p-*`**: Margin and padding utilities for spacing (e.g., `.mt-3`, `.p-2`).
- **`.text-*`**: Text color utilities (e.g., `.text-primary`, `.text-center`).
- **`.bg-*`**: Background color utilities (e.g., `.bg-success`, `.bg-dark`).
- **`.d-*`**: Display utilities for controlling element display (e.g., `.d-none`, `.d-flex`).
- **`.align-items-*`, `.justify-content-*`**: Flexbox alignment utilities.
- **`.w-*`, `.h-*`**: Width and height utilities (e.g., `.w-50`, `.h-100`).
- **`.rounded`, `.rounded-*`**: Border radius utilities for rounded corners.
- **`.shadow`, `.shadow-*`**: Box shadow utilities for depth effects.
- **`.border`, `.border-*`**: Border utilities for adding or customizing borders.
- **`.overflow-*`**: Controls overflow behavior (e.g., `.overflow-auto`).


### display utility classes

- **`.d-*`**: Display utilities for controlling element display (e.g., `.d-none`, `.d-flex`).  
  The `d-*` classes set the CSS `display` property of an element.  
  Common options include:
  - `d-none`: Hides the element (`display: none`)
  - `d-block`: Makes the element a block-level element (`display: block`)
  - `d-inline`: Makes the element inline (`display: inline`)
  - `d-inline-block`: Makes the element inline-block (`display: inline-block`)
  - `d-flex`: Applies flexbox layout (`display: flex`)
  - `d-inline-flex`: Applies inline flexbox layout (`display: inline-flex`)



### Bootstrap Icons

Bootstrap provides a separate icon library called [Bootstrap Icons](https://icons.getbootstrap.com/). You can include icons using the `<i>` or `<svg>` elements with appropriate classes, such as:

```html
<i class="bi bi-alarm"></i>
```

### Getting Started with Bootstrap

To use Bootstrap in your project, include the CDN links in your HTML:

```html
<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<!-- Bootstrap JS (with Popper) -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```