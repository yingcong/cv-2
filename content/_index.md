---
# Leave the homepage title empty to use the site title
title: ""
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ""
      # # Show a call-to-action button under your biography? (optional)
      # button:
      #   text: Download CV
      #   url: uploads/resume.pdf
    design:
      css_class: dark
      background:
        color: black
        image:
          # Add your image background to `assets/media/`.
          filename: stacked-peaks.svg
          filters:
            brightness: 1.0
          size: cover
          position: center
          parallax: false
  - block: markdown
    id: prospective-students
    content:
      title: 'Prospective Students'
      subtitle: ''
      text: |-
        My current research is increasingly focused on AI systems grounded in real-world deployment, real data, and long-term data flywheels. I am especially interested in problems that cannot be solved by simply following existing papers, benchmarks, or publication-driven templates.

        I am looking for students who are willing to work on uncertain, long-horizon problems, care about real-world impact and durable technical value, and can stay focused without being driven solely by short-term metrics such as paper counts, internships, or resume building.

        If you are primarily looking for a conventional publication-driven PhD path, frequent industry internships, or short-term career optimization, my group may not be the best fit. If you resonate with this direction, please read my full advising statement before reaching out.

        <a href="/prospective-students/">Read the full advising statement</a>
    design:
      columns: '1'
  # - block: collection
  #   id: papers
  #   content:
  #     title: Featured Publications
  #     filters:
  #       folders:
  #         - publication
  #       featured_only: true
  #   design:
  #     view: article-grid
  #     columns: 2

  - block: collection
    id: news
    content:
      title: Recent News
      subtitle: ''
      text: ''
      # Page type to display. E.g. post, talk, publication...
      page_type: post
      # Choose how many pages you would like to display (0 = all pages)
      count: 3
      # Filter on criteria
      filters:
        author: ""
        category: ""
        tag: ""
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ""
      # Choose how many pages you would like to offset by
      offset: 0
      # Page order: descending (desc) or ascending (asc) date.
      order: desc
    design:
      # Choose a layout view
      view: date-title-summary
      # Reduce spacing
      spacing:
        padding: [0, 0, 0, 0]
  - block: collection
    id: publication
    content:
      title: Recent Publications
      count: 5
      text: ""
      filters:
        folders:
          - publication
        exclude_featured: false
    design:
      view: citation

  - block: markdown
    id: honors
    content:
      title: 'Honors & Recognition'
      subtitle: ''
      text: |-
        <ul>
        <li><a href="https://www.ccf.org.cn/YOCSEF/hdjh/lt/2024-11-22/834871.shtml">National Youth Talent Program (Overseas)</a></li>
        <li><a href="https://elsevier.digitalcommonsdata.com/datasets/btchxktzyw/9">Stanford/Elsevier World’s Top 2% Scientists</a></li>
        <li><a href="https://www.ccf.org.cn/YOCSEF/hdjh/lt/2024-11-22/834871.shtml">First Prize, CSIG Natural Science Award</a></li>
        <li><a href="https://cse.hkust.edu.hk/News/UbiComp_ISWC2025/">ACM IMWUT Distinguished Paper Award</a> (co-author, WaveBP)</li>
        <li><a href="https://www.yingcong.me/post/2023-ref-neus/">ICCV Best Paper Award Nominee</a> (Ref-NeuS)</li>
        <li><a href="https://arxiv.org/html/2608.04589v1#S3">CVPR EgoCross Challenge</a>: First Place in both Source-Limited and Open-Source tracks (faculty mentor, DomainWiseInfer)</li>
        <li><a href="https://www.yingcong.me/post/2024-icra/">ICRA RoboDrive Challenge</a>: First Place, Track 1: Robust BEV Detection (team award)</li>
        <li><a href="https://infh.hkust-gz.edu.cn/blog/2026/07/20/信息枢纽科研卓越奖-教学卓越奖获奖名单/">HKUST(GZ) Information Hub Faculty Research Excellence Award</a>: Second Prize (joint)</li>
        <li><a href="https://www.ccf.org.cn/Media_list/YEF/2026-05-19/896293.shtml">Guangdong Association of Artificial Intelligence Science Progress Award</a>（广东省人工智能学会科学进步奖）</li>
        <li><a href="https://www.ccf.org.cn/Media_list/YEF/2026-05-19/896293.shtml">Guangdong Industrial Software Science and Technology Award</a>（广东省工业软件科学技术奖）</li>
        <li><a href="https://www.ccf.org.cn/Chapters/Local_Activities/Chapter_News/2021-10-12/745143.shtml">First Prize, Second Guangdong Computer Science Young Scholars Academic Showcase</a> (CCF; 广东省第二届计算机青年学者学术秀)</li>
        <li><a href="https://personal.hkust-gz.edu.cn/hedengbo/assets/publicationPDFs/Wang_IEEE_JBHI_2024a.pdf">Hong Kong PhD Fellowship</a></li>
        </ul>
    design:
      columns: '1'

  # - block: collection
  #   id: demo
  #   content:
  #     title: Playground
  #     filters:
  #       folders:
  #         - demos
  #     count: 2
  #   design:
  #     view: article-grid
  #     columns: 2

  # - block: collection
  #   id: talks
  #   content:
  #     title: Recent & Upcoming Talks
  #     filters:
  #       folders:
  #         - event
  #   design:
  #     view: article-grid
  #     columns: 1

  # - block: cta-card
  #   demo: true # Only display this section in the Hugo Blox Builder demo site
  #   content:
  #     title: 👉 Build your own academic website like this
  #     text: |-
  #       This site is generated by Hugo Blox Builder - the FREE, Hugo-based open source website builder trusted by 250,000+ academics like you.

  #       <a class="github-button" href="https://github.com/HugoBlox/hugo-blox-builder" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star HugoBlox/hugo-blox-builder on GitHub">Star</a>

  #       Easily build anything with blocks - no-code required!
        
  #       From landing pages, second brains, and courses to academic resumés, conferences, and tech blogs.
  #     button:
  #       text: Get Started
  #       url: https://hugoblox.com/templates/
  #   design:
  #     card:
  #       # Card background color (CSS class)
  #       css_class: "bg-primary-700"
  #       css_style: ""
---
