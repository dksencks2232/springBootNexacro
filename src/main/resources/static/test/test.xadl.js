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
            this._addVariable("MvFrameSet", "none", "false", "false");

            // global image

            // global dataset
            var obj = null;
            obj = new Dataset("gds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_NAME\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_SEQ\" type=\"int\" size=\"4\" prop=\"\"/><Column id=\"MENU_OPTP\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"PAGE_URL\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_TOP\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_ID\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_GRP\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"CREATE_DT\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_LEVEL\" type=\"int\" size=\"4\" prop=\"\"/><Column id=\"PAGE_ID\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"PAGE_NAME\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_ARGS\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_STAT\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"CREATE_USER\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"UPDATE_DT\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"UPDATE_USER\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_DESC\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_AUTH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            obj = null;

            obj = new Dataset("gds_userInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USER_ID\">admin</Col><Col id=\"USER_NM\">admin</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            obj = null;


            

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
            this.addEventHandler("onload", this.application_onload, this);

        };
        
        // screeninfo
        this.loadScreenInfo = function()
        {

        }
        
        // script Compiler
        this.addIncludeScript("test.xadl", "comLib::lib_transaction.xjs");
        this.registerScript("test.xadl", function() {

        /**
         * Application 최초 로딩시 발생하는 이벤트 
         * @return
         * @example
         * @memberOf Global
         */
         //include "comLib::lib_transaction.xjs" 
        this.application_onload = function(obj,e)
        {
           //초기 application onload setting
           this.appOnload(obj);
        }
        
        });


        this.checkLicense("../WEB-INF/lib/nexacro14_client_license.xml");
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
