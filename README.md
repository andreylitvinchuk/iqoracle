# API Documentstion 

структура данных
https://drive.google.com/file/d/0B9IdJugjTyzGY0h4dXByUEs4dEE/view?usp=sharing

## root:
```
/api/v1/
```

## Данные с forexprotools
полуает данные с forexprotools
```
GET: /api/v1/forexprotools/

```

```
{
    action: 'refresher',
    pairs: '1,2,3,',
    timeframe=10
}
```

## Прогноз пользователя
### Создание
``` 
POST: /api/v1/user_rates/
```
user_id
: id пользвователя

event_id
: id события

rate_points
: количество поинтов, на котороые играет пользователь
 
rate_type
: тип ставки, 'binary'/'agregate'

rate_value
: значение ставки

rate_direction
: направление ставки, 'up'/'down'

возможные ответы:
```
{
    "status": "error",
    "message": "User doesn't have enought points",
    "timestamp": "2017-04-22T22:40:49.183+03:00"
}
```
```
{
    "status": "success",
    "user": {
        "id": 1,
        "rate_points": 4,
        "email": "test@example.com",
        "created_at": "2017-04-22T12:01:14.756+03:00",
        "updated_at": "2017-04-22T22:43:41.571+03:00"
    },
    "timestamp": "2017-04-22T22:43:41.577+03:00"
}
```

## События
### Все события
```
/api/v1/mertixes/:mertix_id/events
```
### Предстоящие события
```
/api/v1/mertixes/:mertix_id/upcoming_events
```
Ответ:
```
{
    "events":
        [
            {"id":13,"name":null,"metrix_id":1,"created_at":"2017-04-22T21:17:41.024+03:00","updated_at":"2017-04-22T21:17:41.024+03:00","happen_at":"2017-04-22T00:00:00.000+03:00"},
            {"id":14,"name":null,"metrix_id":1,"created_at":"2017-04-22T21:17:41.031+03:00","updated_at":"2017-04-22T21:17:41.031+03:00","happen_at":"2017-04-22T02:00:00.000+03:00"},
            {"id":15,"name":null,"metrix_id":1,"created_at":"2017-04-22T21:17:41.038+03:00","updated_at":"2017-04-22T21:17:41.038+03:00","happen_at":"2017-04-22T04:00:00.000+03:00"}
        ],
    "metrix":{"id":1,"name":"USD/EUR","created_at":"2017-04-22T18:20:04.476+03:00","updated_at":"2017-04-22T18:20:04.476+03:00","time_interval":7200}
}
```


## Ставки пользователя
```
/api/v1/events/:event_id/user_rates/binary
/api/v1/events/:event_id/user_rates/agregate
```

Ответ
```
{
    "user_rates":
        [
            {"id":20,"user_id":1,"event_id":26,"rate_points":1,"completed":null,"success":null,"created_at":"2017-04-22T22:38:15.376+03:00","updated_at":"2017-04-22T22:38:15.376+03:00","rate_type":"binary","rate_value":12,"rate_direction":"up"},
            {"id":21,"user_id":1,"event_id":26,"rate_points":1,"completed":null,"success":null,"created_at":"2017-04-22T22:38:59.094+03:00","updated_at":"2017-04-22T22:38:59.094+03:00","rate_type":"binary","rate_value":12,"rate_direction":"up"}
        ]
    "event":{"id":26,"name":null,"metrix_id":1,"created_at":"2017-04-22T21:21:01.966+03:00","updated_at":"2017-04-22T21:21:01.966+03:00","happen_at":"2017-04-23T02:00:00.000+03:00"},
    "timestamp":"2017-04-22T23:45:17.586+03:00"
}
```