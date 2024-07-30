from kafka import KafkaProducer

producer = KafkaProducer(bootstrap_servers='localhost:9092')

def send_notification(message):
    producer.send('flight_notifications', value=message.encode('utf-8'))
