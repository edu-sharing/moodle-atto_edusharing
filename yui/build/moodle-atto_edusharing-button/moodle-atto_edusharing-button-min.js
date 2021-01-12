YUI.add("moodle-atto_edusharing-button",function(d,e){var h="atto_edusharing",n='<div id="edusharing_hint"> <img src="" id="edusharing_hint_logo"><img id="edusharing_hint_help" src="'+M.cfg.wwwroot+'/lib/editor/atto/plugins/edusharing/pix/help_en.gif">{{get_string "hint1" component}}<br/><br/>{{get_string "hint2" component}}<div style="clear: both"></div><div id="edusharing_hint_skip"><input type="checkbox" id="edusharing_hint_check" name="edusharing_hint_check" value="dontshow" />{{get_string "skipHint" component}}</div><div class="edusharing_center edusharing_hint_buttons"><a id="edusharing_hint_close" class="btn btn-secondary" href="#">{{get_string "cancel" component}}</a> <button id="edusharing_open_repo" class="btn btn-primary">{{get_string "openRepo" component}}</button></div></div> <form id="edusharing_form" class="atto_form" style="display: none"><input id="edusharing_object_url" name="edusharing_object_url" type="hidden" value="" /><input id="edusharing_resid" name="edusharing_resid" type="hidden" value="" /><input id="edusharing_mimetype" name="edusharing_mimetype" type="hidden" value="" /><input id="edusharing_mediatype" name="edusharing_mediatype" type="hidden" value="" /><input id="edusharing_preview_url" name="edusharing_preview_url" type="hidden" value="" /><input id="edusharing_version" name="edusharing_version" type="hidden" value="" /><input id="edusharing_ratio" name="edusharing_ratio" type="hidden" value="" /><h2>{{get_string "title" component}}</h2><input id="edusharing_title" name="edusharing_title" value="" maxlength="25"/><i id="edusharing_title_pencil" class="icon fa fa-pencil fa-fw " aria-hidden="true"></i> <span style="position:absolute; color: rgba(0, 0, 0, 0); display:inline-block; font-size:2em;"id="edusharing_title_helper" name="edusharing_title_helper" value=""></span> <img src="" id="edusharing_preview"> <div id="edusharing_hint_directory" style="display:none">{{get_string "directoryHint" component}}</div><br/><input type="checkbox" id="edusharing_version_latest" name="edusharing_version_latest" checked /><label for="edusharing_version_latest" class="edusharing_label_inline" id="edusharing_version_latest_label">{{get_string "alwaysShowLatestVersion" component}}</label> <div id="edusharing_wrapper_caption" class="edusharing_form_wrapper"><h2>{{get_string "subtitle" component}}</h2> <input id="edusharing_caption" name="edusharing_caption" value="" /></div><div id="edusharing_wrapper_alignment" class="edusharing_form_wrapper"><h2>{{get_string "alignment" component}}</h2> <div class="edusharing_wrapper_alignment_radiowrapper"><input type="radio" id="edusharing_alignment_left" name="edusharing_alignment" value="left"><label for="edusharing_alignment_left" class="edusharing_label_inline">{{get_string "alignmentLeft" component}}</label> </div><div class="edusharing_wrapper_alignment_radiowrapper"><input type="radio" id="edusharing_alignment_right" name="edusharing_alignment" value="right"><label for="edusharing_alignment_right" class="edusharing_label_inline">{{get_string "alignmentRight" component}}</label> </div><div class="edusharing_wrapper_alignment_radiowrapper"><input type="radio" id="edusharing_alignment_none" name="edusharing_alignment" value="none" checked="checked"><label for="edusharing_alignment_none" class="edusharing_label_inline">{{get_string "alignmentNone" component}}</label> </div></div><div id="edusharing_wrapper_dimensions" class="edusharing_form_wrapper"><h2>{{get_string "dimensions" component}}</h2><div style="float:left;margin-right: 20px;"><label for="edusharing_width" class="edusharing_label_block">{{get_string "dimensionsWidth" component}}</label><input type="number" id="edusharing_width" name="edusharing_width" value="" maxlength="4" length="4" />&nbsp;px</div><div><label for="edusharing_height" class="edusharing_label_block">{{get_string "dimensionsheight" component}}</label><input type="number" id="edusharing_height" name="edusharing_height" value="" maxlength="4" length="4"/>&nbsp;px</div></div><div id="edusharing_wrapper_buttons" class="edusharing_form_wrapper"><a id="edusharing_dialog_cancel" class="btn" href="#">{{get_string "cancel" component}}</a><button id="edusharing_submit" class="btn btn-primary">{{get_string "insert" component}}</button> </div></form>';function l(e){this.name="",this.object_url="",this.course=e,this.id="",this.object_version="0"}d.namespace("M.atto_edusharing").Button=d.Base.create("button",d.M.editor_atto.EditorPlugin,[],{initializer:function(){var e,i;this.get("disabled")||(this.addButton({icon:"icon",iconComponent:"atto_edusharing",buttonName:"icon",callback:this._displayDialogue,callbackArgs:"icon",tags:".edusharing_atto",tagMatchRequiresAll:!1}),(e=this.get("host").textarea.ancestor("form"))&&e.on("submit",this.eduSubmit,this),this.getExistingObjects(),i=this,window.addEventListener("message",function(e){if("APPLY_NODE"==e.data.event){var t=e.data.data;window.win.close(),i.updateDialog(t)}},!1))},getUrlVars:function(e){var n={};return e.startsWith("?")||(e="?"+e),e.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(e,t,i){n[t]=i}),n},getExistingObjects:function(){var e,t,i,n,s,r=this.get("host").textarea.get("value"),a=document.createElement("div");for(a.innerHTML=r,e=[a];0<e.length;)if(1==(t=e.shift()).nodeType&&d.one(t).hasClass("edusharing_atto")&&(i="img"==t.nodeName.toLowerCase()?t.getAttribute("src"):t.getAttribute("href"),n=new URL(i).searchParams,(s=new l(this.get("courseid"))).importNode(n)?this.get("existingObjects")[s.id]=s:(alert("error_importing_node - 1"),t.parentNode.removeChild(t))),t.hasChildNodes())for(child=0;child<t.childNodes.length;)e.push(t.childNodes.item(child)),child++},updateDialog:function(e,t){var i,n,s,r,a;d.one("#edusharing_form").set("style","display:block"),d.one("#edusharing_hint").set("style","display:none"),e.isDirectory?(d.one("#edusharing_wrapper_dimensions").set("style","display:none"),d.one("#edusharing_version_latest").set("style","visibility:hidden"),d.one(
"#edusharing_version_latest_label").set("style","visibility:hidden"),d.one("#edusharing_wrapper_alignment").set("style","visibility:hidden"),d.one("#edusharing_hint_directory").set("style","display:block")):"ref"==this.getType(e.mediatype)?d.one("#edusharing_wrapper_dimensions").set("style","visibility:hidden"):(n=i=1e3,s=0,r=Math.round(e.properties["ccm:width"])||600,a=Math.round(e.properties["ccm:height"])||400,i<r&&(a*=s=i/r,r*=s),n<a&&(r*=s=n/a,a*=s),d.one("#edusharing_width").set("value",Math.round(r)),d.one("#edusharing_height").set("value",Math.round(a)),d.one("#edusharing_ratio").set("value",r/a)),d.one("#edusharing_title").set("value",e.title||e.name),d.one("#edusharing_caption").set("value",e.caption||""),d.one("#edusharing_object_url").set("value",e.objectUrl),d.one("#edusharing_mimetype").set("value",e.mimetype),d.one("#edusharing_mediatype").set("value",e.mediatype),d.one("#edusharing_preview_url").set("value",e.preview.url),d.one("#edusharing_preview").set("src",e.preview.url),d.one("#edusharing_version").set("value",e.properties["cclom:version"]),t&&(d.one("#edusharing_resid").set("value",e.resid),d.one("#edusharing_version_latest").set("style","display:none"),d.one("#edusharing_version_latest_label").set("style","display:none"),d.one("#edusharing_submit").setContent(M.util.get_string("update",h)),e.alignment?(d.one("#edusharing_alignment_none").set("checked",!1),d.one("#edusharing_alignment_"+e.alignment).set("checked",!0)):(d.one("#edusharing_alignment_none").set("checked",!0),d.one("#edusharing_alignment_right").set("checked",!1),d.one("#edusharing_alignment_left").set("checked",!1)))},eduSubmit:function(){var e,t,i,n,s,r,a=this.get("host").textarea.get("value"),o=document.createElement("div");for(o.innerHTML=a,e=[o];0<e.length;)if(1==(t=e.shift()).nodeType&&d.one(t).hasClass("edusharing_atto")&&(i="img"==t.nodeName.toLowerCase()?t.getAttribute("src"):t.getAttribute("href"),(s=(n=new URL(i).searchParams).get("resourceId"))&&this.get("existingObjects")[s]?delete this.get("existingObjects")[s]:((r=new l(this.get("courseid"))).importNode(n)||alert("error_importing_node - 2"),r.link(t)||(alert("error_setting_usage"),t.parentNode.removeChild(t)),"img"==t.nodeName.toLowerCase()?t.setAttribute("src",this.getPreviewUrl(r.id)+"&"+n.toString()):t.setAttribute("href",this.getPreviewUrl(r.id)+"&"+n.toString()))),t.hasChildNodes())for(child=0;child<t.childNodes.length;)e.push(t.childNodes.item(child)),child++;for(s in this.get("existingObjects"))this.get("existingObjects")[s].unlink(t)||alert("error_deleting_usage");this.get("host").textarea.set("value",o.innerHTML)},getQueryStringFromParams:function(e){var t,i=[];for(t in e)i.push(t+"="+e[t]);return i.join("&")},getPreviewUrl:function(e){var t=M.cfg.wwwroot+"/lib/editor/atto/plugins/edusharing/preview.php";return t+="?resourceId="+e},getSelectedElement:function(){var e=this.get("host").getSelectedNodes()._nodes[0];return e&&e.nodeType&&3==e.nodeType&&(e=e.parentElement),void 0!==e&&d.one(e).hasClass("edusharing_atto")?e:""},handleUpdate:function(){var e,t,i=[],n=this.getSelectedElement();return!!n&&(e="img"==n.nodeName.toLowerCase()?n.getAttribute("src"):n.getAttribute("href"),"folder"==(t=new URL(e).searchParams).get("mediatype")&&(i.isDirectory=!0),t.get("resourceId")&&(i.resid=t.get("resourceId")),i.title=t.get("title"),i.caption=t.get("caption"),i.properties=[],t.get("width")&&(i.properties["ccm:width"]=n.attributes.width.value),n.attributes.height&&(i.properties["ccm:height"]=n.attributes.height.value),i.objectUrl=t.get("object_url"),i.mimetype=t.get("mimetype"),i.mediatype=t.get("mediatype"),i.preview=[],"content"==this.getType(i.mediatype)?i.preview.url=n.attributes.src.value:i.preview.url=n.attributes.href.value,n.attributes.src?i.preview.url=n.attributes.src.value:i.preview.url=n.attributes.href.value,i.properties["cclom:version"]=t.get("window_version"),i.alignment=n.style["float"],this.updateDialog(i,!0),!0)},_displayDialogue:function(e,t){var i,n,s,r,a,o;e.preventDefault(),i=800,n=600,(s=this.getDialogue({headerContent:M.util.get_string("dialogtitle",h),width:i+"px",height:n+"px",focusAfterHide:t})).width!==i+"px"&&s.set("width",i+"px"),r=this._getFormContent(t),(a=d.Node.create("<div></div>")).append(r),s.set("bodyContent",a),this.handleUpdate()||(d.one("#edusharing_hint_logo").setAttribute("src",this.get("repourl")+"/assets/images/logo.svg"),o=this,YUI().use("cookie",function(e){e.Cookie.get("edusharing_hint_hide")?(o.open_repo(),YUI().use("node",function(e){e.one("#edusharing_hint_check").setAttribute("checked","checked")})):YUI().use("node",function(e){e.one("#edusharing_hint_check").removeAttribute("checked")})})),s.show(),this.markUpdated()},_getFormContent:function(e){var t=d.Handlebars.compile(n),i=d.Node.create(t({component:h,clickedicon:e}));return this._form=i,this._form.one("#edusharing_submit").on("click",this._doInsert,this),this._form.one("#edusharing_hint_check").setAttribute("checked","checked"),this._form.one("#edusharing_hint_check").on("change",this.edusharing_hint_check_change,this),this._form.one("#edusharing_open_repo").on("click",this.open_repo,this),this._form.one("#edusharing_hint_close").on("click",this.closeDialog,this),this._form.one("#edusharing_dialog_cancel").on("click",this.closeDialog,this),this._form.one("#edusharing_width").on("change",this.recalculateDimensions,this),this._form.one("#edusharing_width").on("keyup",this.recalculateDimensions,this),this._form.one("#edusharing_height").on("change",this.recalculateDimensions,this),this._form.one("#edusharing_height").on("keyup",this.recalculateDimensions,this),this._form.one("#edusharing_title").on("keyup",this.recalculateTitleWidth,this),i},recalculateTitleWidth:function(){d.one("#edusharing_title_helper").setContent(d.one("#edusharing_title").get("value")),d.one("#edusharing_title").setStyle("width",d.one("#edusharing_title_helper").get("offsetWidth")+10+"px")},closeDialog:function(e){e.preventDefault(),this.getDialogue({
focusAfterHide:null}).hide()},open_repo:function(){var e,t,i;window.win=window.open(),window.win.document.write("Loading edu-sharing ticket..."),e=M.cfg.wwwroot+"/lib/editor/atto/plugins/edusharing/fetch.php",t=this.get("repourl"),i=this.get("courseid"),fetch(e,{method:"post",mode:"cors",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({useCase:"getTicket",courseid:i})}).then(function(e){if(200<=e.status&&e.status<300)return e.text();throw new Error(e.statusText)}).then(function(e){t+="/components/search?reurl=WINDOW&applyDirectories=true&ticket="+e,window.win.location.href=t})},recalculateDimensions:function(e){"edusharing_height"==e._currentTarget.id?d.one("#edusharing_width").set("value",Math.round(d.one("#edusharing_height").get("value")*d.one("#edusharing_ratio").get("value"))):d.one("#edusharing_height").set("value",Math.round(d.one("#edusharing_width").get("value")/d.one("#edusharing_ratio").get("value")))},edusharing_hint_check_change:function(t){YUI().use("cookie",function(e){t.target._stateProxy.checked?e.Cookie.set("edusharing_hint_hide",!0,{expires:new Date("January 12, 2025")}):e.Cookie.remove("edusharing_hint_hide")})},_doInsert:function(e){var t,i,n,s,r,a;e.preventDefault(),this.getDialogue({focusAfterHide:null}).hide(),this.editor.focus(),(t=this.getNode()).resid?((i=this.getSelectedElement()).setAttribute("title",t.title),n="","none"!=t.alignment&&(n="float:"+t.alignment),"folder"==t.mediatype&&(n="display:block;"),i.setAttribute("style",n),"ref"==this.getType(t.mediatype)?(s=new URL(i.attributes.href.value),i.innerHTML=t.title,s.searchParams.set("title",t.title),s.searchParams.set("caption",t.caption),i.setAttribute("href",s.toString())):((s=new URL(i.attributes.src.value)).searchParams.set("title",t.title),s.searchParams.set("caption",t.caption),s.searchParams.set("width",t.width),s.searchParams.set("height",t.height),i.setAttribute("alt",t.title),i.setAttribute("width",t.width),i.setAttribute("height",t.height),i.setAttribute("src",s.toString()))):(n="","none"!=t.alignment&&(n="float:"+t.alignment+";"),"folder"==t.mediatype&&(n="display:block;"),r="0",0==t.showlatest&&"undefined"!=t.version&&(r=t.version),a='class="edusharing_atto" style="'+n+'" title="'+t.title+'" contenteditable="false" ',s=t.previewurl+"&caption="+t.caption+"&object_url="+t.objecturl+"&mediatype="+t.mediatype+"&mimetype="+t.mimetype+"&window_version="+r+"&title="+t.title,(s=new URL(t.previewurl)).searchParams.set("caption",t.caption),s.searchParams.set("object_url",t.objecturl),s.searchParams.set("mediatype",t.mediatype),s.searchParams.set("mimetype",t.mimetype),s.searchParams.set("window_version",r),s.searchParams.set("title",t.title),a="ref"==t.type?"&nbsp;<a "+a+' href="'+s.toString()+'">'+t.title+"</a>&nbsp;":(a+='src="'+s.toString()+"&width="+t.width+"&height="+t.height+'"','<img alt="'+t.title+'" width="'+t.width+'" height="'+t.height+'" '+a+" />"),this.get("host").insertContentAtFocusPoint(a)),this.markUpdated()},getType:function(e){var t="ref";switch(!0){case-1<e.indexOf("image"):case-1<e.indexOf("video"):case-1<e.indexOf("h5p"):case-1<e.indexOf("learningapps"):case-1<e.indexOf("youtube"):case-1<e.indexOf("vimeo"):case-1<e.indexOf("folder"):t="content"}return t},getNode:function(){var e={};return e.resid=d.one("#edusharing_resid").get("value"),e.title=d.one("#edusharing_title").get("value"),e.caption=d.one("#edusharing_caption").get("value"),e.width=d.one("#edusharing_width").get("value"),e.height=d.one("#edusharing_height").get("value"),e.previewurl=d.one("#edusharing_preview_url").get("value"),e.objecturl=d.one("#edusharing_object_url").get("value"),e.mimetype=d.one("#edusharing_mimetype").get("value"),e.mediatype=d.one("#edusharing_mediatype").get("value"),e.showlatest=d.one("#edusharing_version_latest").get("checked"),e.version=d.one("#edusharing_version").get("value"),"undefined"==e.version&&(e.version="0"),e.alignment=d.one("input[name=edusharing_alignment]:checked").get("value"),e.type=this.getType(e.mediatype),"folder"==e.mediatype&&(e.showlatest=!0,e.width=500),e}},{ATTRS:{disabled:{value:!1},repourl:{value:""},courseid:{value:""},ticket:{value:""},existingObjects:{value:[]}}}),l.prototype.importNode=function(e){var t,i,n,s=e.get("title");return!!s&&(this.name=s,!!(t=e.get("object_url"))&&(this.object_url=t,(i=e.get("resourceId"))&&(this.id=i),(n=e.get("window_version"))&&(this.object_version=n),!0))},l.prototype.link=function(e){var t=M.cfg.wwwroot+"/lib/editor/atto/plugins/edusharing/insert.php?sesskey="+M.cfg.sesskey+"&courseid="+this.course,r=this,a=YUI().use("io","json"),i={method:"POST",sync:!0,data:a.JSON.stringify(r),arguments:{},on:{success:function(e,t,i){try{var n=a.JSON.parse(t.responseText)}catch(s){return alert("invalid data"),!1}return n.id?(r.id=n.id,!0):(alert("no resource id"),!1)},failure:function(e,t,i){return alert("error setting usage"),!1}}};return a.io(t,i)},l.prototype.unlink=function(e){var t=M.cfg.wwwroot+"/lib/editor/atto/plugins/edusharing/delete.php?sesskey="+M.cfg.sesskey+"&courseid="+this.course,n=this,i=YUI().use("io","json","json-stringify"),s={method:"POST",sync:!0,headers:{"Content-Type":"application/json"},data:i.JSON.stringify(n),arguments:{object:n,node:e},on:{success:function(e,t,i){return!0},failure:function(e,t,i){return alert("error deleting object "+n.id+"."),!1}}};return i.io(t,s)}},"@VERSION@",{requires:["moodle-editor_atto-plugin"]});