$(document).ready(function() {
    months = ['', 'Jan', 'Fev', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    var betList = [{"team1":"Moreirense","team2":"Vitória","sportsType":"Volleyball","date":"20/06/2021","stake":"20.09","returnVal":"+ 11.02"},
    {"team1":"Rio Ave","team2":"Vitória","sportsType":"Football","date":"05/05/2021","stake":"29.67","returnVal":"- 29.67"},
    {"team1":"Sporting","team2":"Académica","sportsType":"Women's Football","date":"29/04/2021","stake":"28.94","returnVal":"+ 28.80"},
    {"team1":"Chaves","team2":"Boavista","sportsType":"Football","date":"26/03/2021","stake":"71.98","returnVal":"+ 15.63"},
    {"team1":"Rio Ave","team2":"Académica","sportsType":"Basketball","date":"22/03/2021","stake":"27.08","returnVal":"+ 34.97"},
    {"team1":"Académica","team2":"Moreirense","sportsType":"Women's Water Polo","date":"17/03/2021","stake":"18.22","returnVal":"+ 47.14"},
    {"team1":"Porto","team2":"Moreirense","sportsType":"Football","date":"17/03/2021","stake":"5.17","returnVal":"+ 68.82"},
    {"team1":"Moreirense","team2":"Rio Ave","sportsType":"Basketball","date":"18/02/2021","stake":"37.86","returnVal":"- 37.86"},
    {"team1":"Moreirense","team2":"Porto","sportsType":"Women's Water Polo","date":"17/02/2021","stake":"34.78","returnVal":"- 34.78"},
    {"team1":"Vitória","team2":"Benfica","sportsType":"Football","date":"04/02/2021","stake":"42.57","returnVal":"+ 8.62"},
    {"team1":"Benfica","team2":"Vitória","sportsType":"Handball","date":"03/02/2021","stake":"6.26","returnVal":"- 6.26"},
    {"team1":"Académica","team2":"Moreirense","sportsType":"Handball","date":"13/01/2021","stake":"72.27","returnVal":"- 72.27"},
    {"team1":"Marítimo","team2":"Rio Ave","sportsType":"Women's Volleyball","date":"09/01/2021","stake":"56.32","returnVal":"+ 5.38"},
    {"team1":"Marítimo","team2":"Académica","sportsType":"Football","date":"07/01/2021","stake":"32.35","returnVal":"- 32.35"},
    {"team1":"Boavista","team2":"Porto","sportsType":"Women's Water Polo","date":"01/01/2021","stake":"68.24","returnVal":"+ 33.24"},
    {"team1":"Boavista","team2":"Marítimo","sportsType":"Handball","date":"10/12/2020","stake":"36.20","returnVal":"+ 36.80"},
    {"team1":"Benfica","team2":"Marítimo","sportsType":"Handball","date":"25/11/2020","stake":"52.84","returnVal":"+ 61.68"},
    {"team1":"Académica","team2":"Boavista","sportsType":"Women's Basketball","date":"09/11/2020","stake":"64.97","returnVal":"+ 27.96"},
    {"team1":"Chaves","team2":"Rio Ave","sportsType":"Handball","date":"26/10/2020","stake":"25.19","returnVal":"- 25.19"},
    {"team1":"Boavista","team2":"Benfica","sportsType":"Basketball","date":"29/09/2020","stake":"21.30","returnVal":"+ 42.10"},
    {"team1":"Rio Ave","team2":"Vitória","sportsType":"Volleyball","date":"24/09/2020","stake":"35.02","returnVal":"+ 40.25"},
    {"team1":"Paços de Ferreira","team2":"Moreirense","sportsType":"Futsal","date":"13/09/2020","stake":"9.38","returnVal":"+ 11.77"},
    {"team1":"Porto","team2":"Boavista","sportsType":"Women's Basketball","date":"08/09/2020","stake":"15.43","returnVal":"+ 65.68"},
    {"team1":"Chaves","team2":"Porto","sportsType":"Football","date":"21/08/2020","stake":"42.33","returnVal":"+ 39.46"},
    {"team1":"Marítimo","team2":"Paços de Ferreira","sportsType":"Futsal","date":"20/08/2020","stake":"66.09","returnVal":"- 66.09"},
    {"team1":"Sporting","team2":"Rio Ave","sportsType":"Volleyball","date":"16/08/2020","stake":"61.52","returnVal":"+ 42.44"},
    {"team1":"Moreirense","team2":"Rio Ave","sportsType":"Football","date":"29/07/2020","stake":"68.31","returnVal":"+ 11.58"},
    {"team1":"Sporting","team2":"Paços de Ferreira","sportsType":"Football","date":"28/07/2020","stake":"32.85","returnVal":"- 32.85"},
    {"team1":"Marítimo","team2":"Vitória","sportsType":"Volleyball","date":"19/07/2020","stake":"2.06","returnVal":"+ 28.01"},
    {"team1":"Vitória","team2":"Académica","sportsType":"Football","date":"23/06/2020","stake":"70.64","returnVal":"+ 59.10"},
    {"team1":"Rio Ave","team2":"Moreirense","sportsType":"Women's Volleyball","date":"15/06/2020","stake":"68.90","returnVal":"- 68.90"},
    {"team1":"Sporting","team2":"Porto","sportsType":"Volleyball","date":"30/05/2020","stake":"55.40","returnVal":"- 55.40"},
    {"team1":"Paços de Ferreira","team2":"Chaves","sportsType":"Football","date":"27/05/2020","stake":"3.42","returnVal":"- 3.42"},
    {"team1":"Rio Ave","team2":"Sporting","sportsType":"Women's Football","date":"20/05/2020","stake":"7.13","returnVal":"+ 36.43"},
    {"team1":"Académica","team2":"Chaves","sportsType":"Handball","date":"10/05/2020","stake":"32.29","returnVal":"+ 70.37"},
    {"team1":"Boavista","team2":"Rio Ave","sportsType":"Women's Water Polo","date":"09/05/2020","stake":"25.27","returnVal":"- 25.27"},
    {"team1":"Moreirense","team2":"Sporting","sportsType":"Handball","date":"26/04/2020","stake":"34.61","returnVal":"+ 19.53"},
    {"team1":"Paços de Ferreira","team2":"Marítimo","sportsType":"Handball","date":"31/03/2020","stake":"17.25","returnVal":"+ 15.73"},
    {"team1":"Moreirense","team2":"Rio Ave","sportsType":"Women's Football","date":"24/03/2020","stake":"57.06","returnVal":"- 57.06"},
    {"team1":"Moreirense","team2":"Sporting","sportsType":"Handball","date":"11/03/2020","stake":"54.16","returnVal":"- 54.16"},
    {"team1":"Boavista","team2":"Sporting","sportsType":"Futsal","date":"15/02/2020","stake":"49.14","returnVal":"+ 9.28"},
    {"team1":"Porto","team2":"Paços de Ferreira","sportsType":"Volleyball","date":"04/02/2020","stake":"24.77","returnVal":"+ 60.09"},
    {"team1":"Vitória","team2":"Chaves","sportsType":"Handball","date":"14/01/2020","stake":"59.88","returnVal":"- 59.88"},
    {"team1":"Vitória","team2":"Paços de Ferreira","sportsType":"Women's Football","date":"10/01/2020","stake":"47.81","returnVal":"- 47.81"},
    {"team1":"Rio Ave","team2":"Académica","sportsType":"Women's Basketball","date":"08/01/2020","stake":"21.03","returnVal":"- 21.03"},
    {"team1":"Marítimo","team2":"Porto","sportsType":"Basketball","date":"07/01/2020","stake":"1.33","returnVal":"- 1.33"},
    {"team1":"Académica","team2":"Chaves","sportsType":"Handball","date":"18/12/2019","stake":"30.50","returnVal":"- 30.50"},
    {"team1":"Chaves","team2":"Moreirense","sportsType":"Football","date":"09/12/2019","stake":"67.32","returnVal":"+ 14.27"},
    {"team1":"Chaves","team2":"Académica","sportsType":"Women's Football","date":"12/11/2019","stake":"73.06","returnVal":"- 73.06"},
    {"team1":"Chaves","team2":"Sporting","sportsType":"Basketball","date":"08/11/2019","stake":"52.91","returnVal":"- 52.91"},
    {"team1":"Porto","team2":"Benfica","sportsType":"Handball","date":"03/11/2019","stake":"34.27","returnVal":"- 34.27"},
    {"team1":"Marítimo","team2":"Sporting","sportsType":"Women's Basketball","date":"31/10/2019","stake":"26.73","returnVal":"- 26.73"},
    {"team1":"Moreirense","team2":"Benfica","sportsType":"Women's Water Polo","date":"29/10/2019","stake":"59.56","returnVal":"- 59.56"},
    {"team1":"Moreirense","team2":"Chaves","sportsType":"Women's Basketball","date":"21/08/2019","stake":"42.88","returnVal":"- 42.88"},
    {"team1":"Vitória","team2":"Académica","sportsType":"Handball","date":"10/08/2019","stake":"13.45","returnVal":"+ 2.12"},
    {"team1":"Chaves","team2":"Benfica","sportsType":"Volleyball","date":"26/07/2019","stake":"41.96","returnVal":"+ 25.69"},
    {"team1":"Boavista","team2":"Porto","sportsType":"Women's Football","date":"09/07/2019","stake":"63.60","returnVal":"+ 5.62"},
    {"team1":"Chaves","team2":"Benfica","sportsType":"Volleyball","date":"23/06/2019","stake":"27.59","returnVal":"+ 5.70"},
    {"team1":"Vitória","team2":"Porto","sportsType":"Volleyball","date":"23/06/2019","stake":"66.00","returnVal":"+ 46.59"},
    {"team1":"Sporting","team2":"Moreirense","sportsType":"Football","date":"18/06/2019","stake":"61.08","returnVal":"+ 66.41"},
    {"team1":"Rio Ave","team2":"Vitória","sportsType":"Football","date":"03/06/2019","stake":"52.01","returnVal":"+ 58.80"},
    {"team1":"Benfica","team2":"Marítimo","sportsType":"Handball","date":"28/05/2019","stake":"54.19","returnVal":"- 54.19"},
    {"team1":"Rio Ave","team2":"Académica","sportsType":"Futsal","date":"28/05/2019","stake":"39.57","returnVal":"- 39.57"},
    {"team1":"Marítimo","team2":"Porto","sportsType":"Volleyball","date":"24/05/2019","stake":"69.53","returnVal":"+ 6.53"},
    {"team1":"Sporting","team2":"Rio Ave","sportsType":"Women's Volleyball","date":"23/05/2019","stake":"73.82","returnVal":"+ 5.74"},
    {"team1":"Marítimo","team2":"Vitória","sportsType":"Women's Volleyball","date":"10/05/2019","stake":"21.90","returnVal":"+ 68.83"},
    {"team1":"Chaves","team2":"Sporting","sportsType":"Volleyball","date":"07/05/2019","stake":"15.95","returnVal":"- 15.95"},
    {"team1":"Marítimo","team2":"Rio Ave","sportsType":"Futsal","date":"25/04/2019","stake":"47.42","returnVal":"- 47.42"},
    {"team1":"Paços de Ferreira","team2":"Boavista","sportsType":"Women's Football","date":"21/04/2019","stake":"63.13","returnVal":"+ 24.71"},
    {"team1":"Chaves","team2":"Académica","sportsType":"Volleyball","date":"04/04/2019","stake":"36.74","returnVal":"- 36.74"},
    {"team1":"Vitória","team2":"Sporting","sportsType":"Women's Volleyball","date":"01/04/2019","stake":"2.70","returnVal":"+ 23.58"},
    {"team1":"Chaves","team2":"Sporting","sportsType":"Football","date":"26/03/2019","stake":"48.29","returnVal":"- 48.29"},
    {"team1":"Académica","team2":"Moreirense","sportsType":"Women's Volleyball","date":"20/03/2019","stake":"56.49","returnVal":"- 56.49"},
    {"team1":"Chaves","team2":"Moreirense","sportsType":"Women's Football","date":"09/03/2019","stake":"32.32","returnVal":"- 32.32"},
    {"team1":"Marítimo","team2":"Rio Ave","sportsType":"Handball","date":"06/03/2019","stake":"58.48","returnVal":"- 58.48"},
    {"team1":"Vitória","team2":"Chaves","sportsType":"Basketball","date":"11/02/2019","stake":"4.56","returnVal":"+ 51.52"},
    {"team1":"Porto","team2":"Benfica","sportsType":"Women's Football","date":"07/02/2019","stake":"21.21","returnVal":"+ 63.60"},
    {"team1":"Boavista","team2":"Académica","sportsType":"Volleyball","date":"19/01/2019","stake":"66.70","returnVal":"+ 8.70"},
    {"team1":"Boavista","team2":"Benfica","sportsType":"Football","date":"14/01/2019","stake":"56.64","returnVal":"+ 48.49"},
    {"team1":"Académica","team2":"Moreirense","sportsType":"Women's Football","date":"06/01/2019","stake":"67.20","returnVal":"- 67.20"},
    {"team1":"Sporting","team2":"Vitória","sportsType":"Women's Basketball","date":"31/12/2018","stake":"43.44","returnVal":"+ 8.13"},
    {"team1":"Benfica","team2":"Boavista","sportsType":"Football","date":"26/12/2018","stake":"38.80","returnVal":"+ 43.21"},
    {"team1":"Paços de Ferreira","team2":"Chaves","sportsType":"Handball","date":"24/12/2018","stake":"54.16","returnVal":"- 54.16"},
    {"team1":"Chaves","team2":"Paços de Ferreira","sportsType":"Women's Volleyball","date":"15/12/2018","stake":"55.89","returnVal":"+ 15.92"},
    {"team1":"Marítimo","team2":"Rio Ave","sportsType":"Handball","date":"15/12/2018","stake":"27.21","returnVal":"- 27.21"},
    {"team1":"Boavista","team2":"Benfica","sportsType":"Women's Water Polo","date":"08/12/2018","stake":"31.25","returnVal":"- 31.25"},
    {"team1":"Chaves","team2":"Porto","sportsType":"Basketball","date":"06/12/2018","stake":"19.79","returnVal":"+ 31.30"},
    {"team1":"Benfica","team2":"Paços de Ferreira","sportsType":"Football","date":"05/12/2018","stake":"4.35","returnVal":"- 4.35"},
    {"team1":"Paços de Ferreira","team2":"Benfica","sportsType":"Football","date":"29/11/2018","stake":"20.05","returnVal":"- 20.05"},
    {"team1":"Rio Ave","team2":"Académica","sportsType":"Women's Water Polo","date":"27/11/2018","stake":"45.57","returnVal":"+ 70.50"},
    {"team1":"Paços de Ferreira","team2":"Benfica","sportsType":"Football","date":"11/11/2018","stake":"41.35","returnVal":"- 41.35"},
    {"team1":"Moreirense","team2":"Porto","sportsType":"Futsal","date":"08/11/2018","stake":"61.59","returnVal":"+ 14.40"},
    {"team1":"Paços de Ferreira","team2":"Benfica","sportsType":"Handball","date":"17/10/2018","stake":"72.37","returnVal":"- 72.37"},
    {"team1":"Benfica","team2":"Marítimo","sportsType":"Basketball","date":"09/10/2018","stake":"35.42","returnVal":"- 35.42"},
    {"team1":"Porto","team2":"Boavista","sportsType":"Women's Water Polo","date":"28/09/2018","stake":"60.60","returnVal":"- 60.60"},
    {"team1":"Paços de Ferreira","team2":"Benfica","sportsType":"Women's Football","date":"14/09/2018","stake":"37.08","returnVal":"+ 51.49"},
    {"team1":"Porto","team2":"Marítimo","sportsType":"Handball","date":"11/06/2018","stake":"68.28","returnVal":"- 68.28"},
    {"team1":"Boavista","team2":"Benfica","sportsType":"Volleyball","date":"09/03/2018","stake":"35.36","returnVal":"+ 55.24"},
    {"team1":"Vitória","team2":"Porto","sportsType":"Futsal","date":"09/03/2018","stake":"32.91","returnVal":"- 32.91"},
    {"team1":"Vitória","team2":"Porto","sportsType":"Handball","date":"11/01/2018","stake":"24.95","returnVal":"- 24.95"}];

    function getSpentAmount() {
        var spentAmount = 0;

        for(bet in betList) {
            var betYear = betList[bet].date.split('/')[2];
            var betMonth = betList[bet].date.split('/')[1];
            
            if(betYear == '2021' && betMonth == '06') {
                spentAmount += parseFloat(betList[bet].stake);
            }
        }

        $('#spent').html('Spent ' + spentAmount + '€');
    }
    getSpentAmount();

    $('#limit').html('Limit ' + window.name + '€');
    if(window.name == '') {
        $('#limit').html('No Limit');
    }

    $('#save-limit-button').click(function() {
        window.name = $('#value-input').val();
        $('#limit').html('Limit ' + window.name + '€');
    });
    
    $('#set-monthly-limit').on('click', function() {
        $('#value-input').val(window.name);
    });

    function createTable() {
        $('#bet-table tbody tr').remove(); // clean previous table

        // create table
        for(bet in betList) {
            var tr = "<tr id=row-" + bet + ">\
                        <td>\
                            <button type=\"button\" class=\"btn btn-secondary edit-row\" data-bs-toggle=\"modal\" data-bs-target=\"#editBetModal\">\
                                <i class=\"fa fa-pencil\" aria-hidden=\"true\" id=\"edit-icon\"></i>\
                            </button>\
                        </td>\
                        <th>" + betList[bet].team1 + "-" + betList[bet].team2 + "</th>\
                        <td>" + betList[bet].sportsType + "</td>\
                        <td>" + betList[bet].date + "</td>\
                        <td>" + betList[bet].stake + " €</td>\
                        <td>" + betList[bet].returnVal + " €</td>\
                    </tr>";

            $('#bet-table tbody').append(tr);
        }
    }
    createTable();
    
    // save a new bet
    $('#save-bet-button').click(function() {
        var team1 = $('#team1-input').val();
        var team2 = $('#team2-input').val();
        var sportsType = $('#sports-type-input').val();
        var date = $('#date-input').val();
        var stake = $('#stake-input').val();
        var returnVal = $('#return-input').val();

        if(returnVal == '')
            returnVal = '- ' + stake;
        else
            returnVal = '+ ' + returnVal;
        
        var bet = {'team1': team1, 'team2': team2, 'sportsType': sportsType, 'date': date, 'stake': stake, 'returnVal': returnVal};
        betList.unshift(bet);

        getSpentAmount();

        createTable();
    });

    // edit a saved bet
    var editID;
    $('#bet-table').on('click', '.edit-row', function() {
        editID = $(this).parent().parent().attr('id').split('row-')[1]; // get the row id corresponding to position in list 

        // insert stored values into modal
        $('#edit-team1').val(betList[editID].team1);
        $('#edit-team2').val(betList[editID].team2);
        $('#edit-sports-type').val(betList[editID].sportsType);
        $('#edit-date').val(betList[editID].date);
        $('#edit-stake').val(betList[editID].stake);
        if(betList[editID].returnVal.split(' ')[0] == '+')
            $('#edit-return').val(betList[editID].returnVal.split(' ')[1]);
        else
            $('#edit-return').val(betList[editID].returnVal);
    });

    $('#edit-bet-button').click(function() {
        betList[editID].team1 = $('#edit-team1').val();
        betList[editID].team2 = $('#edit-team2').val();
        betList[editID].sportsType = $('#edit-sports-type').val();
        betList[editID].date = $('#edit-date').val();
        betList[editID].stake = $('#edit-stake').val();

        if($('#edit-return').val() == '')
            betList[editID].returnVal = '- ' + $('#edit-stake').val();
        else
            betList[editID].returnVal = $('#edit-return').val();
        
        createTable();
    });

    $('#add-bet').click(function() {
        $('#team1-input').val('');
        $('#team2-input').val('');
        $('#date-input').val('');
        $('#stake-input').val('');
        $('#return-input').val('');
    });

    // generate results table
    var chosenYear = '2021';
    var chosenSport = '';
    var graphData = [];
    function generateResultsTable() {
        var prevMonth = -1;
        var results = 0;
        var n = 0;
        var daysTable = '';
        for(bet in betList) {
            var year = betList[bet].date.split('/')[2];
            var month = betList[bet].date.split('/')[1];
            var sport = betList[bet].sportsType;
            if(year == chosenYear && (sport == chosenSport || chosenSport == '')) {
                if(month == prevMonth || prevMonth == -1) {
                    currReturn = betList[bet].returnVal.split(' ')[1];
                    if(betList[bet].returnVal.split(' ')[0] == '-') {
                        currReturn = -1 * parseFloat(currReturn);
                    }

                    daysTable = "<tr>\
                                    <td>" + betList[bet].date.split('/')[0] + "</td>\
                                    <td>" + currReturn + " €</td>\
                                </tr>" + daysTable;

                    results = Math.round((parseFloat(currReturn) + parseFloat(results)) * 100) / 100;
                }else {
                    var msg = '';
                    if(results >= 0) {
                        msg = 'Profit of '
                    }else {
                        msg = 'Loss of '
                    }

                    $("<tr data-bs-toggle='collapse' data-bs-target='#hidden" + n + "' class='accordion-toggle'>\
                        <th>" + months[parseInt(prevMonth)] +"</th>\
                        <td>" + msg + results + " €</td>\
                    </tr>\
                    <tr>\
                        <td class='hiddenRow' colspan='12'>\
                            <div class='accordian-body collapse' id='hidden" + n + "'>\
                                <table class='table'>\
                                    <tbody>\
                                        " + daysTable + "\
                                    </tbody>\
                                </table>\
                            </div>\
                        </td>\
                    </tr>").prependTo('#results-table > tbody');
                    daysTable = '';
                    graphData.push([new Date(parseInt(chosenYear), parseInt(prevMonth)-1), parseFloat(results)]);

                    currReturn = betList[bet].returnVal.split(' ')[1];
                    if(betList[bet].returnVal.split(' ')[0] == '-') {
                        currReturn = -1 * parseFloat(currReturn);
                    }

                    daysTable = "<tr>\
                                    <td>" + betList[bet].date.split('/')[0] + "</td>\
                                    <td>" + currReturn + " €</td>\
                                </tr>" + daysTable;

                    results = betList[bet].returnVal.split(' ')[1];
                    if(betList[bet].returnVal.split(' ')[0] == '-') {
                        results = Math.round(-1 * parseFloat(results) * 100) / 100;
                    }

                    n++;
                }
                prevMonth = month
            }else if(year < chosenYear) {
                if(prevMonth == -1)
                    break;
                var msg = '';
                if(results >= 0) {
                    msg = 'Profit of '
                }else {
                    msg = 'Loss of '
                }
                $("<tr data-bs-toggle='collapse' data-bs-target='#hidden" + n + "' class='accordion-toggle'>\
                        <th>" + months[parseInt(prevMonth)] +"</th>\
                        <td>" + msg + results + " €</td>\
                    </tr>\
                    <tr>\
                        <td class='hiddenRow' colspan='12'>\
                            <div class='accordian-body collapse' id='hidden" + n + "'>\
                                <table class='table'>\
                                    <tbody>\
                                        " + daysTable + "\
                                    </tbody>\
                                </table>\
                            </div>\
                        </td>\
                    </tr>").prependTo('#results-table > tbody');
                daysTable = '';
                graphData.push([new Date(parseInt(chosenYear), parseInt(prevMonth)-1), parseFloat(results)]);
                
                break;
            }
        }

        for(var i = graphData.length-1; i >= 0; i--) {
            if(graphData[i+1]) {
                graphData[i][1] += graphData[i+1][1];
            }
        }
    }
    generateResultsTable();

    $('#select-year').change(function() {
        chosenYear = $(this).val();
        $('#results-table tbody tr').remove();
        graphData = [];
        generateResultsTable();
        drawChart();
    });

    // google charts
    // Load google charts
    if(document.getElementById('chart-col')) {
        google.charts.load('current', {'packages':['line', 'corechart']});
        google.charts.setOnLoadCallback(drawChart);
    }
    // Draw the chart and set the chart values
    function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('date', 'Month');
        data.addColumn('number', 'Balance');

        if(graphData.length != 0) 
            data.addRows(graphData);
        else
            data.addRows([[new Date(), 0]]);

        var options = {
            hAxis: {
                title: 'Month',
            },
            vAxis: {
                title: 'Money',
                format: '#.##€'
            },
            legend: {
                position: 'none'
            },
            height: 500
        };
        
        var chart = new google.charts.Line(document.getElementById('chart-col'));
        chart.draw(data, google.charts.Line.convertOptions(options));
    }
    window.onload = drawChart;
    window.onresize = drawChart;

    $('#results-table').on('click', 'tbody .accordion-toggle', function() {
        clicked = $(this);
        expanded = '';
        nExpanded = 0;
        $(this).parent().find('.accordion-toggle').each(function() {
            if($(this).attr('aria-expanded') == 'true') {
                expanded = $(this);
                nExpanded++;
            }
        });
        
        if(nExpanded == 0) {
            graphData = [];
            $('#results-table tbody tr').remove();
            generateResultsTable();
            drawChart();
        }else {
            graphData = [];
            getDaysGraph($(this));
        }
    });

    function getDaysGraph(row) {
        // var month = row.children().html();
        var selectedMonths = [];
        row.parent().find('.accordion-toggle').each(function() {
            if($(this).attr('aria-expanded') == 'true') {
                // console.log($(this).children().html());
                selectedMonths.push($(this).children().html());
            }
        });

        for(month in selectedMonths) {
            for(var i = 0; i < months.length; i++) {
                if(selectedMonths[month] == months[i]) {
                    selectedMonths[month] = i;
                    break;
                }
            }
        }

        for(bet in betList) {
            var betMonth = parseInt(betList[bet].date.split('/')[1]);
            var betYear = betList[bet].date.split('/')[2];
            var betDay = parseInt(betList[bet].date.split('/')[0]);
            var sport = betList[bet].sportsType;

            if(betYear == chosenYear && selectedMonths.includes(betMonth) && (sport == chosenSport || chosenSport == '')) {
                var result = betList[bet].returnVal.split(' ')[1];
                if(betList[bet].returnVal.split(' ')[0] == '-') {
                    result = -1 * parseFloat(result);
                }

                graphData.push([new Date(parseInt(betYear), betMonth-1, betDay), parseFloat(result)]);
            }
        }
        
        graphData.sort(function(a, b) {
            return a[0] - b[0];
        });

        for(var i = 1; i < graphData.length; i++) {
            graphData[i][1] += graphData[i-1][1];
        } 

        console.log(graphData);

        drawChart();
    }

    $('#select-sport').change(function() {
        chosenSport = $(this).val();
        $('#results-table tbody tr').remove();
        graphData = [];
        generateResultsTable();
        drawChart();
    });

    $('.pick-date').datepicker({
        format: "dd/mm/yyyy"
    });

    function sportsRankings() {
        var football = 0;
        var basketball = 0;
        var volleyball = 0;
        var handball = 0;
        var futsal = 0;
        var womenFootball = 0;
        var womenBasketball = 0;
        var womenVolleyball = 0;
        var womenWaterpolo = 0;

        var return2021 = 0;
        var return2020 = 0;
        var return2019 = 0;
        var return2018 = 0;

        for(bet in betList) {
            var value = betList[bet].returnVal.split(' ')[1];
            if(betList[bet].returnVal.split(' ')[0] == '-') {
                value = -1 * parseFloat(value);
            }

            switch (betList[bet].sportsType) {
                case "Football":
                    football += parseFloat(value);
                    break;
                case "Basketball":
                    basketball += parseFloat(value);
                    break;
                case "Volleyball":
                    volleyball += parseFloat(value);
                    break;
                case "Handball":
                    handball += parseFloat(value);
                    break;
                case "Futsal":
                    futsal += parseFloat(value);
                    break;
                case "Women's Football":
                    womenFootball += parseFloat(value);
                    break;
                case "Women's Basketball":
                    womenBasketball += parseFloat(value);
                    break;
                case "Women's Volleyball":
                    womenVolleyball += parseFloat(value);
                    break;
                case "Women's Water Polo":
                    womenWaterpolo += parseFloat(value);
                    break;
            }
            
            switch (betList[bet].date.split('/')[2]) {
                case "2021":
                    return2021 += parseFloat(value);
                    break;
                case "2020":
                    return2020 += parseFloat(value);
                    break;
                case "2019":
                    return2019 += parseFloat(value);
                    break;
                case "2018":
                    return2018 += parseFloat(value);
            }
        }

        $('#football-return').html(Math.round(football * 100) / 100 + '€');
        if(football < 0)
            $('#football-return').parent().children('.up-down-indicator').attr('src', 'images/Index-Down-icon.png');

        $('#basketball-return').html(Math.round(basketball * 100) / 100 + '€');
        if(basketball < 0)
            $('#basketball-return').parent().children('.up-down-indicator').attr('src', 'images/Index-Down-icon.png');

        $('#volleyball-return').html(Math.round(volleyball * 100) / 100 + '€');
        if(volleyball < 0)
            $('#volleyball-return').parent().children('.up-down-indicator').attr('src', 'images/Index-Down-icon.png');

        $('#handball-return').html(Math.round(handball * 100) / 100 + '€');
        if(handball < 0)
            $('#handball-return').parent().children('.up-down-indicator').attr('src', 'images/Index-Down-icon.png');

        $('#futsal-return').html(Math.round(futsal * 100) / 100 + '€');
        if(futsal < 0)
            $('#futsal-return').parent().children('.up-down-indicator').attr('src', 'images/Index-Down-icon.png');

        $('#women-football-return').html(Math.round(womenFootball * 100) / 100 + '€');
        if(womenFootball < 0)
            $('#women-football-return').parent().children('.up-down-indicator').attr('src', 'images/Index-Down-icon.png');

        $('#women-basketball-return').html(Math.round(womenBasketball * 100) / 100 + '€');
        if(womenBasketball < 0)
            $('#women-basketball-return').parent().children('.up-down-indicator').attr('src', 'images/Index-Down-icon.png');

        $('#women-volleyball-return').html(Math.round(womenVolleyball * 100) / 100 + '€');
        if(womenVolleyball < 0)
            $('#women-volleyball-return').parent().children('.up-down-indicator').attr('src', 'images/Index-Down-icon.png');

        $('#women-waterpolo-return').html(Math.round(womenWaterpolo * 100) / 100 + '€');
        if(womenWaterpolo < 0)
            $('#women-waterpolo-return').parent().children('.up-down-indicator').attr('src', 'images/Index-Down-icon.png');

        $('#2021-return').html(Math.round(return2021 * 100) / 100 + '€');
        if(return2021 < 0)
            $('#2021-return').parent().children('.up-down-indicator').attr('src', 'images/Index-Down-icon.png');

        $('#2020-return').html(Math.round(return2020 * 100) / 100 + '€');
        if(return2020 < 0)
            $('#2020-return').parent().children('.up-down-indicator').attr('src', 'images/Index-Down-icon.png');

        $('#2019-return').html(Math.round(return2019 * 100) / 100 + '€');
        if(return2019 < 0)
            $('#2019-return').parent().children('.up-down-indicator').attr('src', 'images/Index-Down-icon.png');

        $('#2018-return').html(Math.round(return2018 * 100) / 100 + '€');
        if(return2018 < 0)
            $('#2018-return').parent().children('.up-down-indicator').attr('src', 'images/Index-Down-icon.png');
    }
    if($('#select-ranking').length) {
        $('#years-rankings').hide();
        sportsRankings();
    }

    $('#select-ranking').change(function() {
        if($(this).val() == 'years') {
            $('#sports-rankings').hide();
            $('#years-rankings').show();
        }else if($(this).val() == 'sports') {
            $('#sports-rankings').show();
            $('#years-rankings').hide();
        }
    });
});
