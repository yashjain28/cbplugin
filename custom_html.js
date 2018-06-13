const defaultHTMLWidget = {
  [HTML_KEY]: `\
<div class="text-center underline">
  <h2>HTML Widget</h2>
</div>
`,
  [CSS_KEY]: `\
.underline {
  text-decoration: underline;
}
`,
  [JS_KEY]: `\
//JavaScript
`,
};

const createDefaultForStaticSetting = function(rtnVal){
  return {
    dataType: "STATIC_DATA_TYPE",
    value: rtnVal,
  };
};


CB_PORTAL.registerWidget(
  // this function must be called in order to register the widget as a plugin
  {
    type_name: "CUSTOM_HTML_WIDGET",
    display_name: "CUSTOMIZE_HTML",
    plugin: true,
    settings: [
      {
        name: "html",
        display_name: "code",
        type: "DATA_SETTING_TYPE",
        incoming_parser: true,
        expected_format: defaultHTMLWidget,
        default_value: createDefaultForStaticSetting(defaultHTMLWidget),
        force_data: ["STATIC_DATA_TYPE", "DYNAMIC_DATA_TYPE"],
        split: true
      }
    ]
  }
);