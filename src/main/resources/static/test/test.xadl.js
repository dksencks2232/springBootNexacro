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
            var frame0 = new VFrameSet("VFrameSet0", "absolute", null, null, null, null, null, null, this);
            this.addChild(frame0.name, frame0);
            this.frame = frame0;
            frame0.set_separatesize("*,0,0");

            
            var frame1 = new ChildFrame("loginFrame", "absolute", null, null, null, null, null, null, "Frame::Login.xfdl", frame0);
            frame0.addChild(frame1.name, frame1);
            frame1.set_formurl("Frame::Login.xfdl");
            var frame2 = new HFrameSet("HFrameSet0", "absolute", null, null, null, null, null, null, frame0);
            frame0.addChild(frame2.name, frame2);
            frame2.set_separatesize("0,*");

            
            var frame3 = new ChildFrame("LeftFrame", "absolute", null, null, null, null, null, null, "Frame::LeftFrame.xfdl", frame2);
            frame2.addChild(frame3.name, frame3);
            frame3.set_formurl("Frame::LeftFrame.xfdl");
            var frame4 = new VFrameSet("VFrameSet1", "absolute", null, null, null, null, null, null, frame2);
            frame2.addChild(frame4.name, frame4);
            frame4.set_separatesize("75,*");

            
            var frame5 = new ChildFrame("TopFrame", "absolute", null, null, null, null, null, null, "Frame::TopFrame.xfdl", frame4);
            frame4.addChild(frame5.name, frame5);
            frame5.set_formurl("Frame::TopFrame.xfdl");
            var frame6 = new FrameSet("WorkFrame", "absolute", null, null, null, null, null, null, frame4);
            frame4.addChild(frame6.name, frame6);
            frame6.set_topmost("true");

            
            var frame7 = new ChildFrame("MainForm", "absolute", null, null, null, null, null, null, "Frame::MainFrame.xfdl", frame6);
            frame6.addChild(frame7.name, frame7);
            frame7.set_formurl("Frame::MainFrame.xfdl");
            frame7.set_showcascadetitletext("false");
            frame7.set_showtitlebar("false");
            frame7.set_showtitleicon("false");
            frame7.set_openstatus("maximize");
            frame7.style.set_background("transparent");
            frame7.style.set_align("center top");

            var frame8 = new ChildFrame("MDIFrame", "absolute", null, null, null, null, null, null, "Frame::MDIFrame.xfdl", frame0);
            frame0.addChild(frame8.name, frame8);
            frame8.set_formurl("Frame::MDIFrame.xfdl");

        };
        
        this.on_initEvent = function()
        {

        };
        
        // screeninfo
        this.loadScreenInfo = function()
        {

        }
        
        // script Compiler

        this.checkLicense("");
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
