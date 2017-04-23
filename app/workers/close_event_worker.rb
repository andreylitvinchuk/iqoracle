class CloseEventWorker
  include Sidekiq::Worker

  def perform(event_id)
    res = Event::Close(event_id: event_id)
  end
end
