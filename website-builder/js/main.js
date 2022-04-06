const editor = grapesjs.init({
    container: "#editor",
    fromElement: true,
    width: "auto",
    storageManager: false,
   plugins: ["gjs-blocks-basic"],
   pluginsOpts: {
       "gjs-blocks-basic": {},

   },
   blockManager: {
       appendTo: "#blocks",
   },
   layerManager: {
       appendTo: "#layer-container",
   },
   stylesManager: {
       appendTo: "#style-view",

   },
});
