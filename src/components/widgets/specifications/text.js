const text = {
  "category": "Dashboard Tools",
  "group": "Text",
  "type": "Text",
  "title": "Text",
  "description": "Create a heading or simply display text. Supports multiple messages as well as basic HTML.",
  "image": "http://placehold.it/140x100?text=TEXT",
  "sections": [{
    "type": "Setup",
    "fields": [
      {
        "name": "Title",
        "type": "text",
        "defaultValue": "Text"
      },
      {
        "name": "Size",
        "type": "dropdown",
        "defaultValue": "1x1",
        "options": [
          { "label": "1x1", "value": "1x1" },
          { "label": "2x1", "value": "2x1" },
          { "label": "1x2", "value": "1x2" },
          { "label": "2x2", "value": "2x2" },
          { "label": "1w heading", "value": "1w-heading" },
          { "label": "2w heading", "value": "2w-heading" },
          { "label": "3w heading", "value": "3w-heading" },
          { "label": "4w heading", "value": "4w-heading" },
          { "label": "Full width heading", "value": "full-width-heading" }
        ]
      },
      {
        "name": "Message one",
        "type": "text",
        "help": "The first text message to show",
        "defaultValue": ""
      },
      {
        "name": "Message one type",
        "type": "dropdown",
        "help": "The type of message to show",
        "defaultValue": "text",
        "options": [
          { "label": "Text", "value": "text" },
          { "label": "Alert", "value": "alert" },
          { "label": "Info", "value": "info" }
        ]
      },
      {
        "name": "Message two",
        "type": "text",
        "help": "The second text message to show",
        "defaultValue": ""
      },
      {
        "name": "Message two type",
        "type": "dropdown",
        "help": "The type of message to show",
        "defaultValue": "text",
        "options": [
          { "label": "Text", "value": "text" },
          { "label": "Alert", "value": "alert" },
          { "label": "Info", "value": "info" }
        ]
      },
      {
        "name": "Message three",
        "type": "text",
        "help": "The third text message to show",
        "defaultValue": ""
      },
      {
        "name": "Message three type",
        "type": "dropdown",
        "help": "The type of message to show",
        "defaultValue": "text",
        "options": [
          { "label": "Text", "value": "text" },
          { "label": "Alert", "value": "alert" },
          { "label": "Info", "value": "info" }
        ]
      },
      {
        "name": "Message four",
        "type": "text",
        "help": "The fourth text message to show",
        "defaultValue": ""
      },
      {
        "name": "Message four type",
        "type": "dropdown",
        "help": "The type of message to show",
        "defaultValue": "text",
        "options": [
          { "label": "Text", "value": "text" },
          { "label": "Alert", "value": "alert" },
          { "label": "Info", "value": "info" }
        ]
      }
    ]
  }]
}

export default text
