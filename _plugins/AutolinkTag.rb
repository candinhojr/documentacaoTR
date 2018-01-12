module Jekyll

  # Custom tag to get URL of pages by ID
  # Example of usage:
  #   `{% url RF-HOM.02 %}` will render the url of the page with id defined as 'RF-HOM.02'
  #
  class UrlTag < Liquid::Tag
    COLLECTION_NAME = 'sismob'     # collection name to be used to generate the nav
    ID_KEY = 'codigo'              # unique identifier key name (to be defined at each page)

    def initialize(tag_name, text, tokens)
      super
      text = text.strip
      link, params = text.split(',', 2)
      @link_id, @anchor = link.split('#', 2)

      params ||= ''
      @attributes = {}
      params.scan(::Liquid::TagAttributes) do |key, value|
        @attributes[key] = value.gsub(/"/, '')
      end
    end

    def render(context)
      srcpage = context.registers[:page]
      site = context.registers[:site]

      site.collections[COLLECTION_NAME].docs.each do |page|
        if page.data[ID_KEY] == @link_id
          @page = page
          url = site.baseurl + page.url
          url += '#' + @anchor if @anchor
          return url
        end
      end

      raise AutolinkTagError, 'link not found: ' + @link_id + ', defined at page ' + srcpage['path']
    end
  end


  # Custom tag to render a link of the page defined with the specified ID
  # Example of usage:
  #   `{% link RF-HOM.02 %}` will render the link of the page with id defined as 'RF-HOM.02'
  #   => <a href="{url of RF-HOM.02}">{title of RF-HOM.02 page}</a>
  class LinkTag < UrlTag

    # Get the title that should be rendered by the link
    def make_title()
      title = @attributes['title'] || @page.data['title']
      unless @attributes['title'] then
        title += '#' + @anchor if @anchor
      end
      return title
    end

    def render(context)
      url = super(context)
      return '<a href="' + url + '">' + make_title() + '</a>'
    end

  end

  # Custom tag to render a links with anchors of a specific page
  # Example of usage:
  #   `{% link_msg MSG.001 %}` will render the link of the page 'msg-codificacao' with the anchor 'MSG.001'
  #   => <a href="{url of msg-codificacao}#{anchor of page}">#MSG.001</a>
  class LinkMsgTag < LinkTag
    LOOKUP_PAGE = 'msg-codificacao' # page id where to search for the anchor

    def initialize(tag_name, text, tokens)
      super(tag_name, text.prepend(LOOKUP_PAGE + '#'), tokens)
    end

    def make_title()
      return @attributes['title'] || @anchor
    end
  end


 # Custom tag to render a links with anchors of a specific page
  # Example of usage:
  #   `{% link_mod MODAL.001 %}` will render the link of the page 'msg-modal' with the anchor 'MODAL.001'
  #   => <a href="{url of msg-modal}#{anchor of page}">#MODAL.001</a>
  class LinkModalTag < LinkTag
    LOOKUP_PAGE = 'msg-modal' # page id where to search for the anchor

    def initialize(tag_name, text, tokens)
      super(tag_name, text.prepend(LOOKUP_PAGE + '#'), tokens)
    end

    def make_title()
      return @attributes['title'] || @anchor
    end
  end


 # Custom tag to render a links with anchors of a specific page
  # Example of usage:
  #   `{% link_mod ALERTA.001 %}` will render the link of the page 'msg-alerta' with the anchor 'ALERTA.001'
  #   => <a href="{url of msg-modal}#{anchor of page}">#ALERTA.001</a>
  class LinkAlertaTag < LinkTag
    LOOKUP_PAGE = 'RN-ALE.01' # page id where to search for the anchor

    def initialize(tag_name, text, tokens)
      super(tag_name, text.prepend(LOOKUP_PAGE + '#'), tokens)
    end

    def make_title()
      return @attributes['title'] || @anchor
    end
  end


  class AutolinkTagError < RuntimeError
  end
end


Liquid::Template.register_tag('url', Jekyll::UrlTag)
Liquid::Template.register_tag('link', Jekyll::LinkTag)
Liquid::Template.register_tag('link_msg', Jekyll::LinkMsgTag)
Liquid::Template.register_tag('link_modal', Jekyll::LinkModalTag)
Liquid::Template.register_tag('link_alerta', Jekyll::LinkAlertaTag)
