const specification = {
  "category": "Dashboard Tools",
  "group": "Image",
  "type": "Image",
  "title": "Image",
  "description": "Display an image from a URL - great for adding logos or photos to your dashboard.",
  "image": "http://placehold.it/140x100?text=Image",
  "sections": [{
    "type": "Setup",
    "fields": [
      {
        "name": "Title",
        "type": "text",
        "defaultValue": "Image"
      },
      {
        "name": "Size",
        "type": "dropdown",
        "defaultValue": "1x1",
        "options": [
          { "label": "1x1", "value": "1x1" },
          { "label": "1x2", "value": "1x2" },
          { "label": "2x1", "value": "2x1" },
          { "label": "2x2", "value": "2x2" },
          { "label": "2x3", "value": "2x3" },
          { "label": "3x2", "value": "3x2" },
          { "label": "3x3", "value": "3x3" },
          { "label": "4x2", "value": "4x2" },
          { "label": "4x3", "value": "4x3" }
        ]
      },
      {
        "name": "Path",
        "type": "text",
        "help": "The URL path to the image you wish to show",
        "defaultValue": ""
      },
      {
        "name": "Reload",
        "type": "dropdown",
        "help": "Select a reload period for this widget",
        "defaultValue": "3-minutes",
        "options": [
          { "label": "3 minutes", "value": "3-minutes" },
          { "label": "15 minutes", "value": "15-minutes" },
          { "label": "1 hour", "value": "1-hour" },
          { "label": "5 hour", "value": "5-hour" }
        ]
      }
    ]
  }]
}

export default specification
