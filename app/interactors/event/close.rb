class Event::Close
  include Interactor::Organizer

  class Action
    include Interactor

    #required context:
    # event_id || event
    #

    def call
      event = context.event || Event.find(context.event_id)

    end

  end

  organize Action
end