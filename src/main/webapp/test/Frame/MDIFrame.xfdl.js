(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        this.on_create = function()
        {
            // Declare Reference
            var obj = null;
            
            if (Form == this.constructor) {
                this.set_name("MDIFrame");
                this._setFormPosition(0,0,1280,42);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Tab", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"TAB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE_KO\" type=\"STRING\" size=\"256\"/><Column id=\"WIN_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "0", "0", "230", "42", null, null, this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_MDI_Logo");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "230", "0", null, "42", "0", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_MDI_Bg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_PreMdi", "absolute", null, "0", "18", "42", "131", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_MDI_TabSpinup");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_NexMdi", "absolute", null, "0", "18", "42", "110", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_MDI_TabSpindown");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_maximize", "absolute", null, "0", "25", "42", "70", null, this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_MDI_Extend");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cascade", "absolute", null, "0", "31", "42", "39", null, this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_MDI_Cascade");
            this.addChild(obj.name, obj);

            obj = new Button("btn_closeAll", "absolute", null, "0", "39", "42", "0", null, this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_MDI_AllClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "1149", "0", "3", "42", null, null, this);
            obj.set_taborder("8");
            obj.set_visible("false");
            obj.style.set_background("#ff7272ff");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "1145", "41", "33", "22", null, null, this);
            obj.set_taborder("9");
            obj.set_visible("false");
            obj.style.set_color("red");
            obj.set_text("w3");
            this.addChild(obj.name, obj);

            obj = new Div("div_Tab", "absolute", "230", "5", null, null, "152", "0", this);
            obj.set_taborder("10");
            obj.style.set_background("transparent");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_Tab,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("10");
            		p.style.set_background("transparent");
            		p.set_scrollbars("none");

            	}
            );
            this.div_Tab.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1280, 42, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("MDIFrame");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("MDIFrame.xfdl", function() {
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.fn_onload, this);
            this.btn_PreMdi.addEventHandler("onclick", this.btn_PreMdi_onclick, this);
            this.btn_NexMdi.addEventHandler("onclick", this.btn_NexMdi_onclick, this);
            this.btn_maximize.addEventHandler("onclick", this.btn_arrange_onclick, this);
            this.btn_cascade.addEventHandler("onclick", this.btn_arrange_onclick, this);
            this.btn_closeAll.addEventHandler("onclick", this.btn_arrange_onclick, this);
            this.btn_closeAll.addEventHandler("onkillfocus", this.btn_closeAll_onkillfocus, this);
            this.div_Tab.addEventHandler("onclick", this.div_Tab_onclick, this);

        };

        this.loadIncludeScript("MDIFrame.xfdl");

       
    };
}
)();
