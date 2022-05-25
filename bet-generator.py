import random
import datetime
import json

teams = ['Benfica', 'Sporting', 'Porto', 'Boavista', 'Vitória', 'Académica', 'Marítimo',
         'Rio Ave', 'Moreirense', 'Paços de Ferreira', 'Chaves']
sports_types = ['Football', 'Basketball', 'Volleyball', 'Handball', 'Futsal', 'Women\'s Football', 'Women\'s Basketball', 
                'Women\'s Volleyball', 'Women\'s Water Polo']

bets = []
for i in range(100):
    team1 = teams[random.randrange(0, len(teams))]
    team2 = teams[random.randrange(0, len(teams))]
    while team1 == team2:
        team2 = teams[random.randrange(0, len(teams))]
        
    sports_type = sports_types[random.randrange(0, len(sports_types))]

    start = datetime.date(2018, 1, 1)
    end = datetime.date(2021, 6, 1)
    rand_date = start + datetime.timedelta(seconds=random.randint(0, int((end - start).total_seconds())))
    date = '{:02d}/{:02d}/{:d}'.format(rand_date.day, rand_date.month, rand_date.year)

    stake_val = random.uniform(1.0, 75.0)
    
    return_val = random.uniform(-50.0, 75.0)
    if return_val < 0:
        return_val = '- {:.2f}'.format(stake_val)
    else:
        return_val = '+ {:.2f}'.format(return_val)
    
    stake_val = '{:.2f}'.format(stake_val)
    
    bet = '''{{"team1":"{:s}","team2":"{:s}","sportsType":"{:s}","date":"{:s}","stake":"{:s}","returnVal":"{:s}"}}'''.format(team1, team2, sports_type, date, stake_val, return_val)

    bets.append(bet)
    
bets.sort(key=lambda bet: datetime.datetime.strptime(json.loads(bet)["date"], "%d/%m/%Y"), reverse=True)

for bet in bets:
    print(bet + ',')
