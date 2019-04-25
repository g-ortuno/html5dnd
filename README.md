# HTML 5 DND Installable PWA Example
Minimum HTML 5 DND code demonstrating an installable PWA bug


- When running the example in the browser the "card" can be dragged and dropped around the canvas.

 - When running in an Installed PWA the drag and drop does not behave as expected.
This appears to be caused by the `dragover` event not providing updated positioning information (clientX, clientY, offsetX, etc.)
There's also an issue with the `drop` event not firing correctly

