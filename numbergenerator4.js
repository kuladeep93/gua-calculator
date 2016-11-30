$(function () {
    $("#my_selected_Date").datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: "1930:2020"
    });
});
function newDate(m, d, y) {
    var r = new Date(y, m, d);
    return r;
}

function runForm(f) {
    var selected_date = $("#my_selected_Date").datepicker("getDate");
    var r = 0;
    var g = f.gender.value - 0;
    var y = selected_date.getFullYear();
    var m = selected_date.getMonth();
    var d = selected_date.getDate();
    var formDate = new Date(y, m, d);
    var d1 = new Date();
    var d2 = new Date();
    d1 = newDate(1, 30, 1930);
    d2 = newDate(2, 4, 1931);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 7;
        else
            r = 8;
    }

    d1 = newDate(2, 4, 1931);
    d2 = newDate(2, 5, 1932);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 6;
        else
            r = 9;
    }

    d1 = newDate(2, 5, 1932);
    d2 = newDate(2, 4, 1933);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 5;
        else
            r = 1;
    }

    d1 = newDate(2, 4, 1933);
    d2 = newDate(2, 4, 1934);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 4;
        else
            r = 2;
    }

    d1 = newDate(2, 4, 1934);
    d2 = newDate(2, 5, 1935);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 3;
        else
            r = 3;
    }

    d1 = newDate(2, 5, 1935);
    d2 = newDate(2, 5, 1936);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 2;
        else
            r = 4;
    }

    d1 = newDate(2, 5, 1936);
    d2 = newDate(2, 4, 1937);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 1;
        else
            r = 5;
    }

    d1 = newDate(2, 4, 1937);
    d2 = newDate(2, 4, 1938);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 9;
        else
            r = 6;
    }

    d1 = newDate(2, 4, 1938);
    d2 = newDate(2, 5, 1939);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 8;
        else
            r = 7;
    }

    d1 = newDate(2, 5, 1939);
    d2 = newDate(2, 5, 1940);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 7;
        else
            r = 8;
    }

    d1 = newDate(2, 5, 1940);
    d2 = newDate(2, 4, 1941);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 6;
        else
            r = 9;
    }

    d1 = newDate(2, 4, 1941);
    d2 = newDate(2, 4, 1942);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 5;
        else
            r = 1;
    }

    d1 = newDate(2, 4, 1942);
    d2 = newDate(2, 5, 1943);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 4;
        else
            r = 2;
    }

    d1 = newDate(2, 5, 1943);
    d2 = newDate(2, 5, 1944);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 3;
        else
            r = 3;
    }

    d1 = newDate(2, 5, 1944);
    d2 = newDate(2, 4, 1945);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 2;
        else
            r = 4;
    }

    d1 = newDate(2, 4, 1945);
    d2 = newDate(2, 4, 1946);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 1;
        else
            r = 5;
    }

    d1 = newDate(2, 4, 1946);
    d2 = newDate(2, 4, 1947);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 9;
        else
            r = 6;
    }

    d1 = newDate(2, 4, 1947);
    d2 = newDate(2, 5, 1948);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 8;
        else
            r = 7;
    }

    d1 = newDate(2, 5, 1948);
    d2 = newDate(2, 4, 1949);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 7;
        else
            r = 8;
    }

    d1 = newDate(2, 4, 1949);
    d2 = newDate(2, 4, 1950);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 6;
        else
            r = 9;
    }

    d1 = newDate(2, 4, 1950);
    d2 = newDate(2, 4, 1951);
    if (formDate >= d1 && formDate <= d2) {

        if (g == 0)
            r = 5;
        else
            r = 1;
    }

    d1 = newDate(2, 4, 1951);
    d2 = newDate(2, 4, 1952);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 4;
        else
            r = 2;
    }

    d1 = newDate(2, 4, 1952);
    d2 = newDate(2, 4, 1953);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 3;
        else
            r = 3;
    }

    d1 = newDate(2, 4, 1953);
    d2 = newDate(2, 4, 1954);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 2;
        else
            r = 4;
    }

    d1 = newDate(2, 4, 1954);
    d2 = newDate(2, 4, 1955);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 1;
        else
            r = 5;
    }

    d1 = newDate(2, 4, 1955);
    d2 = newDate(2, 4, 1956);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 9;
        else
            r = 6;
    }

    d1 = newDate(2, 4, 1956);
    d2 = newDate(2, 4, 1957);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 8;
        else
            r = 7;
    }

    d1 = newDate(2, 4, 1957);
    d2 = newDate(2, 4, 1958);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 7;
        else
            r = 8;
    }

    d1 = newDate(2, 4, 1958);
    d2 = newDate(2, 4, 1959);
    if (formDate >= d1 && formDate <= d2) {

        if (g == 0)
            r = 6;
        else
            r = 9;
    }

    d1 = newDate(2, 4, 1959);
    d2 = newDate(2, 5, 1960);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 5;
        else
            r = 1;
    }

    d1 = newDate(2, 5, 1960);
    d2 = newDate(2, 4, 1961);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 4;
        else
            r = 2;
    }

    d1 = newDate(2, 4, 1961);
    d2 = newDate(2, 4, 1962);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 3;
        else
            r = 3;
    }

    d1 = newDate(2, 4, 1962);
    d2 = newDate(2, 4, 1963);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 2;
        else
            r = 4;
    }

    d1 = newDate(2, 4, 1963);
    d2 = newDate(2, 5, 1964);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 1;
        else
            r = 5;
    }

    d1 = newDate(2, 5, 1964);
    d2 = newDate(2, 4, 1965);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 9;
        else
            r = 6;
    }

    d1 = newDate(2, 4, 1965);
    d2 = newDate(2, 4, 1966);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 8;
        else
            r = 7;
    }

    d1 = newDate(2, 4, 1966);
    d2 = newDate(2, 4, 1967);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 7;
        else
            r = 8;
    }

    d1 = newDate(2, 4, 1967);
    d2 = newDate(2, 5, 1968);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 6;
        else
            r = 9;
    }

    d1 = newDate(2, 5, 1968);
    d2 = newDate(2, 4, 1969);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 2;
        else
            r = 1;
    }

    d1 = newDate(2, 4, 1969);
    d2 = newDate(2, 4, 1970);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 4;
        else
            r = 2;
    }

    d1 = newDate(2, 4, 1970);
    d2 = newDate(2, 4, 1971);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 3;
        else
            r = 3;
    }

    d1 = newDate(2, 4, 1971);
    d2 = newDate(2, 5, 1972);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 2;
        else
            r = 4;
    }

    d1 = newDate(2, 5, 1972);
    d2 = newDate(2, 4, 1973);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 1;
        else
            r = 5;
    }

    d1 = newDate(2, 4, 1973);
    d2 = newDate(2, 4, 1974);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 9;
        else
            r = 6;
    }

    d1 = newDate(2, 4, 1974);
    d2 = newDate(2, 4, 1975);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 8;
        else
            r = 7;
    }

    d1 = newDate(2, 4, 1975);
    d2 = newDate(2, 5, 1976);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 7;
        else
            r = 8;
    }

    d1 = newDate(2, 5, 1976);
    d2 = newDate(2, 4, 1977);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 6;
        else
            r = 9;
    }

    d1 = newDate(2, 4, 1977);
    d2 = newDate(2, 4, 1978);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 5;
        else
            r = 1;
    }

    d1 = newDate(2, 4, 1978);
    d2 = newDate(2, 4, 1979);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 4;
        else
            r = 2;
    }

    d1 = newDate(2, 4, 1979);
    d2 = newDate(2, 4, 1980);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 3;
        else
            r = 3;
    }

    d1 = newDate(2, 4, 1980);
    d2 = newDate(2, 4, 1981);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 2;
        else
            r = 4;
    }

    d1 = newDate(2, 4, 1981);
    d2 = newDate(2, 4, 1982);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 1;
        else
            r = 5;
    }

    d1 = newDate(2, 4, 1982);
    d2 = newDate(2, 4, 1983);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 9;
        else
            r = 6;
    }

    d1 = newDate(2, 4, 1983);
    d2 = newDate(2, 4, 1984);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 8;
        else
            r = 7;
    }

    d1 = newDate(2, 4, 1984);
    d2 = newDate(2, 4, 1985);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 7;
        else
            r = 8;
    }

    d1 = newDate(2, 4, 1985);
    d2 = newDate(2, 4, 1986);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 6;
        else
            r = 9;
    }

    d1 = newDate(2, 4, 1986);
    d2 = newDate(2, 4, 1987);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 5;
        else
            r = 1;
    }

    d1 = newDate(2, 4, 1987);
    d2 = newDate(2, 4, 1988);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 4;
        else
            r = 2;
    }

    d1 = newDate(2, 4, 1988);
    d2 = newDate(2, 4, 1989);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 3;
        else
            r = 3;
    }

    d1 = newDate(2, 4, 1989);
    d2 = newDate(2, 4, 1990);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 2;
        else
            r = 4;
    }

    d1 = newDate(2, 4, 1990);
    d2 = newDate(2, 4, 1991);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 1;
        else
            r = 5;
    }

    d1 = newDate(2, 4, 1991);
    d2 = newDate(2, 4, 1992);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 9;
        else
            r = 6;
    }

    d1 = newDate(2, 4, 1992);
    d2 = newDate(2, 4, 1993);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 8;
        else
            r = 7;
    }

    d1 = newDate(2, 4, 1993);
    d2 = newDate(2, 4, 1994);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 7;
        else
            r = 8;
    }

    d1 = newDate(2, 4, 1994);
    d2 = newDate(2, 4, 1995);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 6;
        else
            r = 9;
    }

    d1 = newDate(2, 4, 1995);
    d2 = newDate(2, 4, 1996);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 5;
        else
            r = 1;
    }

    d1 = newDate(2, 4, 1996);
    d2 = newDate(2, 4, 1997);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 4;
        else
            r = 2;
    }

    d1 = newDate(2, 4, 1997);
    d2 = newDate(2, 4, 1998);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 3;
        else
            r = 3;
    }

    d1 = newDate(2, 4, 1998);
    d2 = newDate(2, 4, 1999);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 2;
        else
            r = 4;
    }

    d1 = newDate(2, 4, 1999);
    d2 = newDate(2, 4, 2000);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 1;
        else
            r = 5;
    }

    d1 = newDate(2, 4, 2000);
    d2 = newDate(2, 4, 2001);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 9;
        else
            r = 6;
    }

    d1 = newDate(2, 4, 2001);
    d2 = newDate(2, 4, 2002);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 8;
        else
            r = 7;
    }

    d1 = newDate(2, 4, 2002);
    d2 = newDate(2, 4, 2003);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 7;
        else
            r = 8;
    }

    d1 = newDate(2, 4, 2003);
    d2 = newDate(2, 4, 2004);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 6;
        else
            r = 9;
    }

    d1 = newDate(2, 4, 2004);
    d2 = newDate(2, 4, 2005);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 5;
        else
            r = 1;
    }

    d1 = newDate(2, 4, 2005);
    d2 = newDate(2, 4, 2006);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 4;
        else
            r = 2;
    }

    d1 = newDate(2, 4, 2006);
    d2 = newDate(2, 4, 2007);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 3;
        else
            r = 3;
    }

    d1 = newDate(2, 4, 2007);
    d2 = newDate(2, 4, 2008);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 2;
        else
            r = 4;
    }

    d1 = newDate(2, 4, 2008);
    d2 = newDate(2, 4, 2009);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 1;
        else
            r = 5;
    }

    d1 = newDate(2, 4, 2009);
    d2 = newDate(2, 4, 2010);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 9;
        else
            r = 6;
    }

    d1 = newDate(2, 4, 2010);
    d2 = newDate(2, 4, 2011);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 8;
        else
            r = 7;
    }

    d1 = newDate(2, 4, 2011);
    d2 = newDate(2, 4, 2012);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 7;
        else
            r = 8;
    }


    d1 = newDate(2, 4, 2012);
    d2 = newDate(2, 4, 2013);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 6;
        else
            r = 9;
    }

    d1 = newDate(2, 4, 2013);
    d2 = newDate(2, 4, 2014);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 5;
        else
            r = 1;
    }


    d1 = newDate(2, 4, 2014);
    d2 = newDate(2, 4, 2015);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 4;
        else
            r = 2;
    }

    d1 = newDate(2, 4, 2015);
    d2 = newDate(2, 4, 2016);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 3;
        else
            r = 3;
    }


    d1 = newDate(2, 4, 2016);
    d2 = newDate(2, 4, 2017);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 2;
        else
            r = 4;
    }

    d1 = newDate(2, 4, 2017);
    d2 = newDate(2, 4, 2018);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 1;
        else
            r = 5;
    }

    d1 = newDate(2, 4, 2018);
    d2 = newDate(2, 4, 2019);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 9;
        else
            r = 6;
    }

    d1 = newDate(2, 4, 2019);
    d2 = newDate(2, 4, 2020);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 8;
        else
            r = 7;
    }

    d1 = newDate(2, 4, 2021);
    d2 = newDate(2, 4, 2022);
    if (formDate >= d1 && formDate <= d2) {
        if (g == 0)
            r = 7;
        else
            r = 8;
    }


    var ext = "";
    if (g == 0) {
        ext = "male";
    } else {
        ext = "female";
    }
    m++;
    var month="";
    if (m == 1) {
         month = "January";
    }
    else if (m == 2) {
         month = "February";
    }
    else if (m == 3) {
         month = "March";
    }
    else if (m == 4) {
         month = "April";
    }
    else if (m == 5) {
         month = "May";
    }
    else if (m == 6) {
         month = "June";
    }
    else if (m == 7) {
         month = "July";
    }
    else if (m == 8) {
         month = "August";
    }
    else if (m == 9) {
         month = "September";
    }
    else if (m == 10) {
         month = "October";
    }
    else if (m == 11) {
         month = "November";
    }
    else if (m == 12) {
         month = "December";
    }
    if (r == 0) {
        alert("Your birthdate must be between Jan 30, 1930 and Feb 6, 2020.");
    } else {

        document.getElementById("kua_number").innerHTML = "You are a " + ext + " born on " + d+" " + month +" " + y + "<br/><br/> Your Gua number is " +"<span id='op_num'>" +r+"</span>";
    }

}
