var RadCode = [
[13,199,19,269,285,873,457,112,160,505,157,1008,1046,881,1221,1165,302,516,1012,1230,1058,403,821,1617,1444],
[2009,1321,211,578,117,182,15,38,213,761,31,175,7,29,613,306,75,37,260,43,83,111,69,34,20,2078,78,36,397,628,163,176,245,1025,1546,1035,1748,390,40,85,648,414,551,294,553,636,72,317,1005,261,907,323,10,381],
[2060,2085,2064,2140,2170,2163,2031,61,1067,23,24,376,47,281,30,17,2162,137,99,55,301,45,238,164,267,338,589,448,360,63,22,221,217,284,625,76,972,612,320,670,446,2094,552,4,1164,515,1049,272,18,208,1094,407,197,1057,727,77,170,565,348,1452,454,653,504,394,438,5,507,512,1041,367,911,734,532,
59,933,750,198,874,1090,841],
[121,239,291,387,8,722,122,346,2061,2113,253,93,2,652,87,844,25,215,1065,165,71,622,435,298,51,441,487,46,368,1730,849,206,325,283,167,209,116,477,300,802,490,474,956,143,296,635,896,431,416,765,573,811,307,139,134,189,409,571,56,584,1107,657,311,225,223,527,810,1007,941,1397,421,365,460,546,
363,458,772,806,58,314,1747,954,1032,332,991,102,54,649,1740,1510,1739,1021,544,1054,1215],
[32,11,883,48,1,226,520,81,109,2145,429,700,514,2104,682,541,201,747,107,227,451,187,596,106,16,321,569,66,415,141,845,752,547,232,1234,471,1027,872,822,411,830,132,675,84,1184,369,1103,119,815,104,1123,630,661,620,619,509,475,990,98,97,711,988,310,64,1223,591,968,631,400,1023,235,814,150,1405,
828,913,992,94,413,1146,1145,455,1186,919,600,660],
[2120,14,481,2118,128,510,246,218,1077,513,108,74,243,386,90,506,52,334,776,847,355,333,57,459,522,581,501,608,1517,142,168,430,343,523,153,531,50,603,753,268,701,1068,858,669,377,67,305,432,778,207,82,1222,745,185,259,295,1614,979,21,316,469,1181,309,1117,1075,626,889,1722,1150,780,1080,
1746,1727,251,1059,928],
[2149,92,147,188,680,404,449,890,463,95,833,465,1737,378,203,1044,1726,1207,539,144,444,671,779,105,521,1030,960,423,396,1725,1013,1071,1026,936,1190,616,1319,1047,1724,803,33,568,498,580,1148,327,570,408,1048,886,782,1564,278,184,1178,1437,1623,492,1395,614,224,169,579,420,943,1203],
[262,222,1092,257,719,1383,88,534,962,1011,1116,1009,604,1378,1352,917,1036,337,250,1738,959,1000,166,347,769,1476,1129,763,804,739,1520,1477,42,638,924,697,1056,456,1040,1348,1037,287,805,247,1736,519,1192,1648,1743,1376],
[388,280,1002,424,639,495,564,615,645,1212,867,1195,342,336,148,517,938,426,249,1305,443,1723,240,230,364,1114,969,484,1028,1019,252,401,597,330,418,1160,1608,980,854,1166,1733,1185,1734,1149,445,599,1735,1170,957,508],
[2187,640,588,145,862,832,237,277,689,725,834,437,219,464,721,1034,946,1731,485,399,1607,86,254,663,922,684,483,1400,606,1344,985,884,733,1163,359,496,1732,1717,704,982,1295,1449,1183,234,1741,1154,915,909,1742,345]
];

var Extras =
[
{c:2,lr:67,r:67,dr:1,x:58,   n:5,lc:1},
{c:2,lr:72,r:72,dr:1,x:58,   n:1,lc:2},
{c:2,lr:73,r:72,dr:0,x:37,   n:1,lc:1},
{c:2,lr:74,r:72,dr:-1,x:16,  n:6,lc:0},

{c:3,lr:67,r:67,dr:1,x:86,   n:5,lc:2},
{c:3,lr:72,r:72,dr:0,x:86,   n:1,lc:3},
{c:3,lr:73,r:73,dr:0,x:86,   n:1,lc:0},
{c:3,lr:74,r:74,dr:0,x:2,    n:14,lc:0},
{c:3,lr:88,r:73,dr:-1,x:275, n:1,lc:1},
{c:3,lr:89,r:72,dr:-1,x:275, n:1,lc:11},
{c:3,lr:90,r:71,dr:-1,x:275, n:1,lc:7},
{c:3,lr:91,r:70,dr:-1,x:275, n:1,lc:8},
{c:3,lr:92,r:69,dr:-1,x:275, n:3,lc:7},

{c:4,lr:67,r:67,dr:1,x:114,  n:5,lc:3},
{c:4,lr:72,r:72,dr:0,x:114,  n:1,lc:4},
{c:4,lr:73,r:72,dr:0,x:135,  n:6,lc:5},
{c:4,lr:79,r:71,dr:0,x:219,  n:2,lc:4},
{c:4,lr:81,r:70,dr:0,x:219,  n:2,lc:7},
{c:4,lr:83,r:69,dr:-1,x:240, n:3,lc:6},

{c:5,lr:67,r:67,dr:1,x:142,  n:4,lc:4},
{c:5,lr:71,r:70,dr:0,x:163,  n:2,lc:5},
{c:5,lr:73,r:69,dr:-1,x:184, n:3,lc:5}
];

var FullLengths = new Array(25, 54, 80, 95, 85/*86*/, 76, 66, 50, 50, 50);
var RadImg = new Array(8);
var Strip, Entry, EntryFrame, Wait, Menu = null,
    Res, TRes, TPopup, EntryMenu,
    KanjiPane, TangoPane, Body,
    MenuFull, MenuColl, MenuCollImg, TabBody;
var Mode = 0;
var Queue = new Array();
var CollRadR = null, CollRadC = null; //0-based
var Highlights = null;
var CurrentTab = 0;
var TSKanji = [  //e: TD element, n - Nomer, t - , s - (1 for ?, 2 for -, 0 for kanji
    {e : null, n: 0, t:'', s: 1},
    {e : null, n: 0, t:'', s: 1},
    {e : null, n: 0, t:'', s: 1},
    {e : null, n: 0, t:'', s: 1}];
var IE6 = false;
var URLPrefix = "";
var TheKanjiText = null;
var MenuDX = 0, MenuDY = 0;
var FIRST_EXTRA_ROW=67;

function trim(s)
{
    if(s == null)
        return "";
    var c;
    while(s.length && ((c = s.substr(0, 1)) == ' ' || c == '\t' || c == '\n' || c == '\r'))
        s = s.substr(1);
    var n;
    while((n = s.length) && ((c = s.substr(n-1, 1)) == ' ' || c == '\t' || c == '\n' || c == '\r'))
        s = s.substr(0, n-1);
    return s;
}

function de(id)
{
    return document.getElementById(id);
}

function ParsePairSet(s, Sep)
{
    if(s == null || s == "")
        return new Array();
    var a = s.split(Sep), r = new Array();
    var i;
    for(i=0; i< a.length; i++)
    {
        var kv = a[i].split("=");
        r[kv[0].toLowerCase()] = decodeURIComponent(kv[1]);
    }
    return r;
}

function MenuButton(i, j, c, Coll)
{
    var is = i.toString(); js = j.toString();
    var s = "<img id=\"m" + is+js+"\"";
    //var s = "<i";
    if(typeof(c) == "string")
        s += " class=\""+c+"\"";
    return s + " src=\"m/"+is+js+"\"/>";
    //return s + "></i>";
}

function MakeMenu()
{
    var i, j, tr = new Array(), l, c;
    //65 is the last column with the regular layout (0-based)
    for(j=0; j<67; j++)
    {
        l = "<p>";
        for(i=0; j>=FullLengths[i]; i++);
        //l += i.toString();
        //i now has the 0-based index of the first nonempty column in this row
        //if(i)
          //  l += "<span class=\"c" + (i+1).toString()+"\">&nbsp;</span>";
        c = i ? "c" + (i+1).toString() : null;
        for(;i<10 && j<FullLengths[i]; i++)
        {
            l += MenuButton(i, j, c);
            c = null;
        }
        tr[j] = l + "</p>";
    }
    
    //4 more have an almost-identical structire
    for(j=0; j<4; j++)
    {
        l = "<p>" +
            MenuButton(2, 79-j, "c2p") +
            MenuButton(2, 67+j, "c2p") +
            MenuButton(3, 67+j) +
            MenuButton(4, 67+j); 
            
        if(j == 3)
            l += MenuButton(5, 70, "t") +
                MenuButton(5, 71, "t") +
                MenuButton(5, 72);
        else
            l += MenuButton(5, 67+j) +
                MenuButton(5, 75-j, "c2p");
        l +=
            MenuButton(4, 84 - j, "c9p") +
            MenuButton(3, 94 - j, "c10q")+
            "</p>";
        tr[67+j] = l;
    }
    //71
    tr[71] = "<p>"+ 
        MenuButton(2, 75, "c2p") +
        MenuButton(2, 71, "c2p") +
        MenuButton(3, 71) +
        MenuButton(4, 71) + 
        MenuButton(4, 79, "c8p t") +
        MenuButton(4, 80) +
        MenuButton(3, 90, "c10q") + "</p>";
    
    //72
    l = "<p>" +
        MenuButton(2, 74, "c2p t") +
        MenuButton(2, 73, "t") +
        MenuButton(2, 72) +
        MenuButton(3, 72);
    for(j=0; j< 7; j++)
        l += MenuButton(4, 72+j, j == 6 ? null :"t");
    l +=
        MenuButton(3, 89, "c10q") + "</p>";
    tr[72] = l;

    //73
    tr[73] = "<p>" +
        MenuButton(3,73,"c4") +
        MenuButton(3,88, "c10p") + "</p>";
        
    //74...
    l = "<p>";
    for(i=0; i< 14;i++)
        l += MenuButton(3, 74+i, "t");
    tr[74] = l + "</p>";
        
    //alert(tr.join(""));
    de("menufull").innerHTML = tr.join("");
    de("lll").value = tr.join("");
    de("lll").style.display = "block";
}

function onl()
{
    if(typeof(window.clientInformation) == "object")
    {
        var ver = window.clientInformation.appVersion;
        var p = ver.indexOf("MSIE ");
        if(p >= 0)
            IE6 = (parseInt(ver.substr(p+5, 1)) < 7);
    }
    var i;
    Menu = de("menu");
    for(i=0; i<8; i++)
        RadImg[i] = de("srad" + i.toString());
    for(i=0; i<4; i++)
        TSKanji[i].e = de("tsk" + i.toString());
    Strip = de("strip");
    Entry = de("entry");
    EntryFrame = de("entryframe");
    EntryMenu = de("entrymenu");
    Wait = de("ks_wait");
    Res = de("res");
    TRes = de("tres");
    TPopup = de("tpopup");
    KanjiPane = de("kanji");
    TangoPane = de("tango");
    Body = de("body");
    MenuFull = de("menufull");
    MenuFullImg = de("menufullimg");
    MenuColl = de("menucoll");
    TabBody = de("tabbody");
    
    if(Queue.length)
    {
        for(i=0;i<Queue.length; i++)
            window.eval(Queue[i]);
        Queue = new Array();
    }
    
    if(IE6)
    {
        Strip.style.width = 
            EntryFrame.style.width = (Res.clientWidth - 12).toString() + "px";
    }
    if(typeof(_URLPrefix) == "string")
        URLPrefix = _URLPrefix;
        
    OnCtResize()
        
    var e = Menu;
        
    if(window.location.search.length > 1)
    {
        var a = ParsePairSet(window.location.search.substr(1), "&");
        if(typeof(a["n"]) != "undefined" && (i = a["n"]) != null)
        {
            try
            {
                onr(parseInt(trim(i)));
            }
            catch(e){;}
        }
        else if(typeof(a["u"]) != "undefined" && (i = a["u"]) != null)
        {
            try
            {
                var u = parseInt(trim(i));
                onrx({U: u});
            }
            catch(e){;}        
        }
        else if(typeof(a["utf8"]) != "undefined" && (i = a["utf8"]) != null)
            onrx({UTF8: i});
        else if(typeof(a["q"]) != "undefined" && (i = a["q"]) != null && (i = trim(i)) != "")     
            DoSearch({R: i});
    }
}

function MakePairSet(a, Sep)
{
    var k, kv = new Array(), i = 0;
    for(k in a)
        kv[i++] = k + "=" + encodeURIComponent(a[k]);
    return kv.join(Sep);
}

function GetStyle(el)
{
    return typeof(el.currentStyle) != "undefined" ? el.currentStyle :
            document.defaultView.getComputedStyle(el, "");
}

function l(c, r)
{
    if(Menu == null)
    {
        Queue[Queue.length] = "l("+c.toString()+","+r.toString()+");";
        return false;
    }
    
    var i, im;
    //find an empty spot
    for(i=0; i<8; i++)
    {
        if(GetStyle(im = RadImg[i]).visibility == "hidden")
            break;
    }
    if(i < 8)
    {
        im.src = "m/" + c.toString() + r.toString();
        im.style.visibility = "visible";
    }
}

function ons(i)
{
    var im = RadImg[i];
    if(GetStyle(im).visibility == "visible")
        im.style.visibility = "hidden";
    else if(im.src.indexOf("shim") < 0) //Not a shim
        im.style.visibility = "visible";
}

function EntryFrameHeight()
{
    if(typeof(Strip.style) != "undefined" && typeof(Strip.style.display) == "string" && Strip.style.display == "block")
        return (Res.clientHeight - EntryFrame.offsetTop + Strip.offsetTop - 2).toString() + "px";
    return (Res.clientHeight - 2).toString() + "px";
}

function ResizeEntry()
{
    if(EntryFrame.style.display == "block")
    {
        EntryFrame.style.height = EntryFrameHeight();
        Entry.style.height = (EntryFrame.clientHeight - EntryMenu.clientHeight - 1).toString() + "px";
    }
}

function DoneSearch(s)
{
    Wait.style.display = "none";
    var t = s.substr(0, 1);
    s = s.substr(1);
    if(t == "S") //strip
    {
        Strip.style.display = "block";
        Strip.scrollLeft = 0;
        Strip.innerHTML = s;
        ResizeEntry();
        SwitchTab(0);
    }
    else if(t == "A")
    {
        alert(s);
    }
    else if(t == "T")
    {
        TRes.innerHTML = s;
        SwitchTab(1);
    }
    else
    {
        SODOff();
        Strip.style.display = "none";
        EntryFrame.style.display = "block";
        Entry.scrollTop = 0;
        SwitchTab(0);
        ResizeEntry();
        Entry.innerHTML = s;
    }
}

function FindJ(s)
{
    if(s != null && s != "")
    {
        var i, n = s.length;
        for(i=0;i<n; i++)
        {
            var c, u;
            c = s.charCodeAt(i);
            if(c > 0xff)
                u = c;
            else if(i < n - 2 && ((c1)& 0xf0) == 0xe0)
            {
                u = ((c1 & 0xf) << 12) |
                    ((s.charCodeAt(i+1) & 0x3f) << 6) |
                    (s.charCodeAt(i+2) & 0x3f);
            }
            if((u >= 0x3E00 && u <= 0x9fA0) ||
                (u >= 0x3040 && u <= 0x30ff))
                return true;
        }
    }
    return false;
}

function Search(bFull)
{
    //Collect the radicals...
    var i, n, im;
    var K = new Array();
    for(i=0; i<8; i++)
    {
        if(GetStyle(RadImg[i]).visibility == "visible")
        {
            var rc = RadImg[i].src;
            rc = rc.substr(rc.lastIndexOf("/") + 1);
            K[K.length] = RadCode[parseInt(rc.substr(0, 1))][parseInt(rc.substr(1))];
        }
    }
    var re, me;
    var Reading = trim((re = de("Reading")).value),
        Meaning = trim((me = de("Meaning")).value),
        Strokes = trim(de("Strokes").value);
        
    if(FindJ(Meaning))
    {
        re.value = Reading = Meaning;
        me.value = Meaning = "";
    }
        
    if(Reading == "" && Meaning == "" && Strokes == "" && K.length == 0)
    {
        alert("Задайте, пожалуйста, условия поиска.");
        return false;
    }
    
    DoSearch({K : K.join(","),
        R: Reading,
        M: Meaning,
        S: Strokes,
        D: de("Deep").checked ? 1 : 0,
        NS: de("NS").checked ? 1 : 0,
        F: (bFull ? 1 : 0)});    
    return false;
}

function DoSearch(o)
{
    tpoff();
    Wait.style.display = "block";
    $.post(URLPrefix + "search.php", o, DoneSearch, "html");
}

function ShowEntry(s)
{
    Entry.innerHTML = s;
}

function onr(Nomer)
{
    onrx({N : Nomer});
}

function onrx(o)
{
    tpoff();
    SODOff();
    SwitchTab(0);
    EntryFrame.style.display = "block";
    ResizeEntry();
    Entry.scrollTop = 0;
    $.get(URLPrefix + "entry.php", o, ShowEntry, "html");
}

function GetFullMenuItem(e)
{
    var xy = GetCoord(e);
    var x = xy.x, y = xy.y;
    var b = false;
    var i;
    if(y % 22 < 20)
    {
        var r = Math.floor(y / 22), c, el = null;
        if(r < FIRST_EXTRA_ROW)
        {
            if((x - 2) % 28 < 19)
            {
                var c = Math.floor((x - 2) / 28);
                return (c >= 0 && c < 10 && r < FullLengths[c]) ? {c:c,r:r} : false;
            }
        }
        else
        {
            for(i=0; i<Extras.length;i++)
            {
                var ex = Extras[i];
                if((!ex.dr && r == ex.r) || (ex.dr && r*ex.dr >= ex.r*ex.dr && r*ex.dr < ex.r*ex.dr + ex.n))
                {
                    if(x >= ex.x && (x - ex.x) % 21 < 20 && ((ex.dr && x - ex.x<20) || (!ex.dr && (x-ex.x)/21 < ex.n)))
                    {
                        return {c:ex.c, r:ex.lr + (ex.dr ? (r - ex.r)*ex.dr : Math.floor((x - ex.x) /21))};
                    }
                }
            }
        }
    }
    return false;
}

function GetMenuItem(evt)
{
    if(Mode == 2)
    {
        var el = evt.srcElement ? evt.srcElement : evt.originalTarget;
        if(el.tagName.toLowerCase() == "img")
            return {c:parseInt(el.id.substr(1, 1)), r:parseInt(el.id.substr(2))};
    }
    else
        return GetFullMenuItem(evt);
    return false;
}

function menul(evt)
{
    if(!evt)
        evt = window.event;
    var rc;
    if(rc = GetMenuItem(evt))
    {
        if(evt.altKey)
            r(rc.c, rc.r);
        else
            l(rc.c, rc.r);
    }
    else
        return Uncollapse();
}

function menur(evt)
{
    if(!evt)
        evt = window.event;
    var rc;
    if(rc = GetMenuItem(evt))
        return r(rc.c, rc.r);
    else
        return Uncollapse();
}

function Unred()
{
    if(CollRadR != null && CollRadR != null)
    {
        FindMenuItem(CollRadC,CollRadR).style.borderColor = "#000000";
        CollRadR = CollRadC = null;
    }
}    

function Uncollapse()
{
    Unred();
    Unhighlight();
    if(Mode == 2)
    {
        MenuColl.style.display = "none";
        MenuFull.style.display = "block";
        MenuFullImg.style.display = "block";
    }
    MenuFull.className = "";
    Mode = 0;
    return false;
}

function Collapse(c, r)
{
    Col = RadCollapse[c][r];
    var nr = new Array(95);
    var i, max = r;
    nr[r] = new Array();
    nr[r][c] = true;
    for(i=0; i<Col.length; i++)
    {
        var CItem = Col[i];
        var cr = CItem[1] - 1;
        if(typeof(nr[cr]) == "undefined")
            nr[cr] = new Array();
        nr[cr][CItem[0] - 1] = true;
        if(cr > max)
            max = cr;
    }
    var rt = new Array();
    var padsize;
    for(i=0; i<=max; i++)
    {
        if(typeof(nr[i]) != "undefined")
        {
            var l = "<p>";
            for(j=0; j<10; j++)
            {
                if(nr[i][j])
                    l += MenuButton(j, i, null, true);
                else
                    l += "<span>&nbsp;</span>";
            }
            if(i == r)
                padsize = r - rt.length;
            rt[rt.length] = l + "</p>";
        }
    }
    //padding...
    var pad = "";
    for(i=0;i<padsize;i++)
        pad = pad + "<p><span>&nbsp;</span></p>";
    MenuColl.innerHTML = pad + rt.join("");
    MenuFull.style.display = "none";
    MenuFullImg.style.display = "none";
    MenuColl.style.display = "block";
    Mode = 2;
}

function Unhighlight()
{
    if(Highlights != null)
    {
        for(i=0; i<Highlights.length; i++)
            Highlights[i].style.backgroundColor = "";
        Highlights = null;
    }
}    


function Highlight(c, r)
{
    Col = RadCollapse[c][r];
    var i, n = Col.length;
    Unhighlight();
    if(Mode == 2)
    {
        MenuColl.style.display = "none";
        MenuFull.style.display = "block";
        MenuFullImg.style.display = "block"
    }
    MenuFull.className = "hilite";
    Highlights = new Array(Col.length + 1);
    Mode = 1;
    for(i=0; i<n; i++)
        (Highlights[i] = FindMenuItem(Col[i][0]-1, Col[i][1]-1)).style.backgroundColor = "#d9d9d9";
    (Highlights[i] = FindMenuItem(c, r)).style.backgroundColor = "#d9d9d9";
}

function FindMenuItem(c, r)
{
    var i;
    if(Mode == 2)
        return de("m"+c.toString()+r.toString());
    else if(r < FIRST_EXTRA_ROW)
    {
        var p = MenuFull.childNodes[r];
        for(i=0; FullLengths[i]<=r;i++)
            ;
        return p.childNodes[c-i];
    }
    else
    {
        for(i=0;i<Extras.length;i++)
        {
            var ex = Extras[i];
            if(c == ex.c && r >= ex.lr && r < ex.lr+ex.n)
                return MenuFull.childNodes[ex.r + ex.dr*(r - ex.lr)].
                    childNodes[ex.lc + (ex.dr? 0 : r - ex.lr)];
        }
    }
}

function r(c, r)
{
    if(Menu == null)
    {
        Queue[Queue.length] = "r("+c.toString()+","+r.toString()+");";
        return false;
    }
    if(typeof(RadCollapse) != "object")
        return false;
        
    
    //the row of the current one stays
    //empty rows die
    var Same = (r == CollRadR && c == CollRadC);
    Unred();
    if(!Mode || (Mode == 2 && Same) || (Mode == 1 && !Same))
        Highlight(c, r);
    else
        Collapse(c, r);
        
    CollRadR = r;
    CollRadC = c;
    FindMenuItem(c, r).style.borderColor = "#ff0000";
    return false;
}

var Tabs =
[
    {Name:"kanji", Resize: ResizeEntry},
    {Name:"tango", Resize: TangoResize},
    {Name:"about"},
    {Name:"news"}
];

function SwitchTab(n)
{
    if(n != CurrentTab)
    {
        tpoff();
        de("tab_" + Tabs[CurrentTab].Name).className = "";
        de(Tabs[CurrentTab].Name).style.display = "none";
        de("tab_" + Tabs[n].Name).className = "current";
        de(Tabs[n].Name).style.display = "block";
        CurrentTab = n;
        if(typeof(Tabs[CurrentTab].Resize) == "function")
            Tabs[CurrentTab].Resize();
    }
}

function ontk(n)
{
    var k = TSKanji[n];
    if(k.n)
        k.s = (k.s + 1) % 3;
    else
        k.s = 3 - k.s;
    if(!k.s)
        k.e.innerHTML = k.t;
    else
        k.e.innerHTML = (k.s == 1 ? "?" : "-");
}

function tst()
{
    var re, me;
    var r = trim((re = de("tread")).value),
        m = trim((me = de("tmean")).value);
    if(FindJ(m))
    {
        re.value = r = m;
        me.value = m = "";
    }
    if(r == "" && m == "")
        alert("Пожалуйста, укажите чтение или значение искомого слова.");
    else
    {
        tpoff();
        TRes.scrollTop = TRes.scrollLeft = 0;
        $.post(URLPrefix + "tsearch.php", {R : r, M : m, Src:"bytext"}, DoneSearch, "html");
    }
    return false;
}

function KCode(n)
{
    var k = TSKanji[n];
    if(!k.s)
       return k.n;
    else
       return k.s - 2;
}

function tsk()
{
    if(KCode(0) <= 0 && KCode(1) <= 0 && KCode(2) <= 0 && KCode(3) <= 0)
        alert("Пожалуйста, укажите хотя бы один иероглиф. Чтобы поместить иероглиф сюда, надо найти его в иероглифическом словаре и нажать на крупное изображение. Если иероглиф в ячейке уже был выбран, щелкните на ней, чтоб вернуть его на место.");
    else
    {
        tpoff();
        TRes.scrollTop = TRes.scrollLeft = 0;
        $.post(URLPrefix + "tsearch.php", {K0 : KCode(0),
            K1 : KCode(1), K2 : KCode(2), K3 : KCode(3),
            P : de("pos").checked ? 1 : 0,
            Src:"bykanji"}, DoneSearch, "html");
    }
    return false;
}

function thekan()
{
    var i;
    for(i=0; i<4;i++)
    {
        var k = TSKanji[i];
        if(k.s)
        {
            k.n = parseInt(de("nomer").innerHTML);
            k.e.innerHTML = k.t = de("thekanjia").innerHTML;
            k.s = 0;
            break;
        }
    }
    SwitchTab(1);
}

function IsParent(el, id)
{
    while(el)
    {
       if(el.parentElement && typeof(el.parentElement.id) == "string" && id == el.parentElement.id)
           return true;
       el = el.parentElement;
    }
    return false;
}

function PlaceUnder(el, anchor)
{
    var y = anchor.offsetTop + anchor.offsetHeight;
    var x = anchor.offsetLeft;
    while(anchor && anchor.tagName.toLowerCase() != "html" && anchor.tagName.toLowerCase() != "body" && anchor.offsetParent)
    {
        y += anchor.offsetParent.offsetTop;
        x += anchor.offsetParent.offsetLeft;
        anchor = anchor.offsetParent; 
    }
    if(CurrentTab)
    {
        x -= (document.body.scrollLeft + TRes.scrollLeft);
        y -= (document.body.scrollTop + TRes.scrollTop);
    }
    else
    {
        x -= (document.body.scrollLeft + Entry.scrollLeft);
        y -= (document.body.scrollTop + Entry.scrollTop);
    }
    el.style.top = y.toString() + "px"; 
    el.style.left = x.toString() + "px";
}

function DoneTref(s)
{
    var p = s.indexOf(String.fromCharCode(1));
    var el = de(s.substr(0, p));
    s = s.substr(++p);
    
    if(!IsParent(el, "tpopup"))
        PlaceUnder(TPopup, el);
        
    TPopup.innerHTML = s;
    TPopup.style.display = "block";
}

function ont(id, n)
{
    $.get(URLPrefix + "tref.php", {N : n, ID: id}, DoneTref, "html");
}

function tpoff()
{
    if(typeof(TPopup) != "undefined" && typeof(TPopup.style) != "undefined")
        TPopup.style.display = "none";
}

function GetSODURL()
{
    var s;
    if(trim(de("yoshida").innerHTML) != "")
        return "https://yosida.com/images/kanji/" + parseInt(trim(de("uni").innerHTML)).toString(16).toUpperCase() + ".gif";
    else if((s = trim(de("halpern").innerHTML)) != "0")
    {
        n = parseInt(s);
        s = n.toString();
        if(n < 1000)
            s = "0" + s;
        else if(n < 100)
            s = "00" + s;
        else if(n < 10)
            s = "000" + s;
        
        return "http://nihongo.monash.edu/cgi-bin/dispgif?" + s;
    }
    else if((s = trim(de("nomer").innerHTML)) != "") //Kakijun as fallback, always there.
        return "mobile/SODGIF/2_" + s + ".gif";
    return null;
}

function SODOff()
{
    de("eme_sod").style.borderStyle = "outset";
    TheKanjiText = null;
}

function sod()
{
    var URL;
    var e = de("thekanjia"),
        mi = de("eme_sod");
    if(TheKanjiText)
    {
        e.innerHTML = TheKanjiText;
        TheKanjiText = null;
        mi.style.borderStyle = "outset";
    }
    else if((URL = GetSODURL()) != null)
    {
        TheKanjiText = e.innerHTML;
        e.innerHTML = "<img src=\"" + URL + "\" alt=\"SOD\"/>";
        mi.style.borderStyle = "inset";
    }
    else
        alert("Для этого иероглифа анимированная диаграмма написания на Сети автором не найдена.");
}

function GetCoord(e)
{
    if(typeof(e.offsetX) != "undefined")
    {
        return {x:e.offsetX + e.target.offsetLeft,y:e.offsetY + e.target.offsetTop};
    }
    else
    {
        var x = e.clientX + Menu.scrollLeft + document.body.parentNode.scrollLeft,
            y = e.clientY + Menu.scrollTop + document.body.parentNode.scrollTop;
        var e = Menu;
        while(e)
        {
            x -= e.offsetLeft;
            y -= e.offsetTop;
            e = e.offsetParent;
        }
        return {x:x, y:y};
    }
}

function memo(e)
{
    if(Menu != null && Mode != 2)
    {
        if(!e)
            e = window.event;
        Menu.style.cursor = GetFullMenuItem(e) ? "pointer" : "default";
    }
}

function OnCtResize()
{
    var ts = de("tabstrip");
    var h = de("ct").offsetHeight - ts.offsetTop - ts.offsetHeight - 2;
    TabBody.style.height = h.toString() + "px";
    
    if(typeof(Tabs[CurrentTab].Resize) == "function")
        Tabs[CurrentTab].Resize();
}

function TangoResize()
{
    var ch = TabBody.offsetHeight - de("tsearchk").offsetHeight - 10;
    de("tresframe").style.height = ch.toString() + "px";
}