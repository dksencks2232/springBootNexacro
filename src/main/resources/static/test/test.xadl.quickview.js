(function()
{
    return function()
    {
        // Theme, Component URI Setting
        this._theme_uri = "./_theme_/";
        this._globalvar_uri = "globalvars.xml";
        this.loadTypedefition = function()
        {
            // this._addService(prefixid, type, url, cachelevel, codepage, language, version, communication);
            this._addService("default_typedef.xml", "Base", "form", "./Base/", "dynamic", null, "", "0", "0");
            this._addService("default_typedef.xml", "nexacro14lib", "js", "./nexacro14lib/", "session", null, "", "", "0");
            this._addService("default_typedef.xml", "svcurl", "JSP", "http://localhost:8080/", "none", null, "", "", "0");
            this._addService("default_typedef.xml", "css", "css", "./css/", "dynamic", null, "", "", "0");
            this._addService("default_typedef.xml", "Frame", "form", "./Frame/", "dynamic", null, "", "", "0");
            this._addService("default_typedef.xml", "img", "file", "./img/", "session", null, "", "", "0");
            this._addService("default_typedef.xml", "comLib", "js", "./nexacro14lib/component/comLib/", "none", null, "", "", "0");

            this._component_uri = (this._arg_compurl ? this._arg_compurl : "./nexacro14lib/component/");
            // load components
            var registerclass = [
            		{"id":"Div", "classname":"nexacro.Div", "type":"JavaScript"},
            		{"id":"Button", "classname":"nexacro.Button", "type":"JavaScript"},
            		{"id":"PopupDiv", "classname":"nexacro.PopupDiv", "type":"JavaScript"},
            		{"id":"Combo", "classname":"nexacro.Combo", "type":"JavaScript"},
            		{"id":"CheckBox", "classname":"nexacro.CheckBox", "type":"JavaScript"},
            		{"id":"ListBox", "classname":"nexacro.ListBox", "type":"JavaScript"},
            		{"id":"Edit", "classname":"nexacro.Edit", "type":"JavaScript"},
            		{"id":"MaskEdit", "classname":"nexacro.MaskEdit", "type":"JavaScript"},
            		{"id":"TextArea", "classname":"nexacro.TextArea", "type":"JavaScript"},
            		{"id":"Menu", "classname":"nexacro.Menu", "type":"JavaScript"},
            		{"id":"Tab", "classname":"nexacro.Tab", "type":"JavaScript"},
            		{"id":"ImageViewer", "classname":"nexacro.ImageViewer", "type":"JavaScript"},
            		{"id":"Radio", "classname":"nexacro.Radio", "type":"JavaScript"},
            		{"id":"Calendar", "classname":"nexacro.Calendar", "type":"JavaScript"},
            		{"id":"Static", "classname":"nexacro.Static", "type":"JavaScript"},
            		{"id":"Grid", "classname":"nexacro.Grid", "type":"JavaScript"},
            		{"id":"Spin", "classname":"nexacro.Spin", "type":"JavaScript"},
            		{"id":"PopupMenu", "classname":"nexacro.PopupMenu", "type":"JavaScript"},
            		{"id":"GroupBox", "classname":"nexacro.GroupBox", "type":"JavaScript"},
            		{"id":"ProgressBar", "classname":"nexacro.ProgressBar", "type":"JavaScript"},
            		{"id":"Plugin", "classname":"nexacro.Plugin", "type":"JavaScript"},
            		{"id":"Dataset", "classname":"nexacro.NormalDataset", "type":"JavaScript"}
            ];
            this._addClasses(registerclass);
        };
        
        this.on_loadGlobalVariables = function()
        {
            // global variable

            // global image

            // global dataset
            var obj = null;

            

        };
        
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("test");
            this.set_version("");
            this.set_tracemode("none");
            this.set_themeid("BaseMdi.xtheme");

            if (this._is_attach_childframe)
            	return;

            // frame
            var mainframe = this.createMainFrame("mainframe", "absolute", "0", "0", "800", "800", null, null, this);
            mainframe.set_resizable("true");
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("true");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;

            // tray
            var tray = null;

        };
        

        
        this.mainframe_createBodyFrame = function()
        {
            var obj = new ChildFrame("childframe", "absolute", null, null, null, null, null, null, "", this);
            this.addChild(obj.name, obj);
            this.frame = obj;
            obj.set_formurl(application._quickview_formurl);
            obj.set_showtitlebar("false");
            obj.set_showstatusbar("false");
            obj = null;
        };
        
        this.on_initEvent = function()
        {

        };
        
        // screeninfo
        this.loadScreenInfo = function()
        {

        }
        
        // script Compiler

        this.loadTypedefition();
        this.loadScreenInfo();
        this.loadTheme("BaseMdi.xtheme");

this.loadCss("css::Common.css");
this.loadCss("css::LeftFrame.css");
this.loadCss("css::Login.css");
this.loadCss("css::MainFrame.css");
this.loadCss("css::MainFrame.css");
this.loadCss("css::MDIFrame.css");
this.loadCss("css::PopupFrame.css");
this.loadCss("css::TopFrame.css");
this.loadCss("css::WorkFrame.css");

        this.loadIncludeScript("test.xadl");
    };
}
)();
