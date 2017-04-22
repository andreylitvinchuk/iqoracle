class Event::Generate
  include Interactor::Organizer

  class Action
    include Interactor

    #required context
    # date
    # metrix

    def call
      date = context.date
      metrix = context.metrix
      context.fail!(error: 'Date is not set') if date.blank?
      context.fail!(error: 'Metrix is not set') if metrix.blank?

      start_timestamp = date.beginning_of_day
      current_timestamp = start_timestamp
      end_timestamp = date.end_of_day

      while current_timestamp < end_timestamp
        Event.find_or_create_by(happen_at: current_timestamp, metrix: metrix)
        current_timestamp += metrix.time_interval.seconds
      end
    end

  end

  organize Action
end