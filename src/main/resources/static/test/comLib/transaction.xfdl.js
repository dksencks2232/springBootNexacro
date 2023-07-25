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
                this.set_name("transaction");
                this.set_titletext("New Form");
                this._setFormPosition(,,1030,720);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("inputDS", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">command1</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">command2</Col><Col id=\"Column1\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("outputDS", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static01", "absolute", "20", "39", "990", "229", null, null, this);
            obj.set_taborder("0");
            obj.set_text("1. gfnTransaction");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "231", "39", "299", "220", null, null, this);
            obj.set_taborder("1");
            obj.set_text("(string, string, string, string, string, string, boolean)\r\n⇒ ( \r\n      \"search\", \r\n      \"http://서비스URL\", \r\n      \"inputDS=inputDS \", \r\n      \"outputDS=outputDS \", \r\n      \"arg1=\" + nexacro.wrapQuote(\"인자값1\"), \r\n      \"fnCallback\", \r\n      true\r\n)");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "535", "138", "56", "22", null, null, this);
            obj.set_taborder("2");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Static("st_1_result01", "absolute", "600", "39", "404", "220", null, null, this);
            obj.set_taborder("3");
            obj.set_text("(function) fnCallback.call(\r\n                                             \"search\",        //svcID\r\n                                             0,                     //errorCode\r\n                                             \"SUCCESS\"     //errorMsg\r\n                                            )");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "231", "0", "370", "40", null, null, this);
            obj.set_taborder("4");
            obj.set_text("Arguments:  ( Type ) ⇒ ( Value )");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "20", "0", "212", "40", null, null, this);
            obj.set_taborder("5");
            obj.set_text("Method");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "600", "0", "404", "40", null, null, this);
            obj.set_taborder("6");
            obj.set_text("Result: (Type) Vaule");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "21", "280", "987", "426", null, null, this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1030, 720, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("New Form");
            		p.set_mobileorientation("landscape");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("transaction.xfdl", "lib::lib_base.xjs");
        this.addIncludeScript("transaction.xfdl", "lib::lib_transaction.xjs");
        this.registerScript("transaction.xfdl", function() {
        //include "lib::lib_base.xjs";
        //include "lib::lib_transaction.xjs";

        // 1 gfnTransaction  사용 예제
        this.Button00_onclick = function(obj,e)
        {
         	var strSvcId    = "search";
        	var strSvcUrl   = "http://서비스URL";
        	var inData      = "inputDS=inputDS ";
        	var outData     = "outputDS=outputDS ";
        	var strArg      = "arg1=" + nexacro.wrapQuote("인자값1");
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;
        	
        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20190101"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync); 		// 비동기통신 여부 [생략가능]
        };

        //사용자 콜백함수
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}
        	
        	switch(svcID)
        	{
        		case "search":
        			this.TextArea00.set_value(this.outputDS.saveXML());			
        			break;
        	}
        };
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button01.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("transaction.xfdl");

       
    };
}
)();
