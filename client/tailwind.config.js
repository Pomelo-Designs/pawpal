/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{tsx,ts,js,jsx}",
    "./src/**/*.{tsx,ts,js,jsx}"
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    screens: {
      'expanded': '840px',
      // => @media (min-width: 1023px) { ... }

      'medium': { 'max': '840px' },
      // => @media (max-width: 767px) { ... }

      'compact': { 'max': '600px' },
      // => @media (max-width: 639px) { ... }
    },
    fontFamily: {
      'karla': ['"Karla"'],
    },
    extend: {
      colors: {
        pink: {
          100: 'rgba(173, 41, 92, 0.11)',
          200: 'rgba(173, 41, 92, 0.14)',
          300: '#FFDBCC',
        },
      },
      backgroundImage: {
        'gradient-purple': "url('https://previews.dropbox.com/p/thumb/AB4M3yIZE73kpEmLYaOWr4gNEAPmJr4JbjNhFQUQP7aY9fsEVwx53wK-cIsNHM8pSDxE523pIzlfbKVAAn5q_XKJ3lMPFmv-PCDoojkpO9it87xyoBbo3rNXXi6dtGcuEH5YBR5s_QD1IkGRXymGkVtRaf3RYcvjVBtte7TL4Wp6WeSmAcCio_tN0OhLOieCRW2AaAAnr5ZCJb21C7aI2nT63OiXEq82V5PeFy_PIAe7ITI_HT7fBzIbAkfWPpc2efetuqBik0MMBXNdoUZnziNZcefwcdfI6lLI2PY1dn6en9_hbwx21XrhQobf1eBnuw6WCkvrVz9_3QsyQqu3m-c5hPgGKGp3yzRpn5WVhDrqIZqAD0KXtJpVP3fs4fALUjU/p.jpeg')",
        'gradient-orange': "url('https://previews.dropbox.com/p/thumb/AB6VnC7ahf5_mkKAwm5VroOnZR4DNtRR45D82GahQTc1qJprX77ct7sZPv7oBySFnbK643p5S8Tij9Nkm5dssXQA-DeEtnnb4fzgurCAauHrxmF5NTTJ_hO_yY1-bRnX-z3BEQtdSH-2FQatutu5F5IOyjFR7PNBzU7_uEJiuy_yq8RSEHI5XAaGxndkfEWbtY7iWzmVIAxjUCP3DsBV8SlBmcWySQi3wF2BTNto6zXnj6AmEmxZiW8wjrsHJ526cwPq2FQn9lL4HKr6eoF12yCGW_ZUxhYUXmaO3UIobZryCnKdiMj4AtKrXIr58FrafjzQbwVi0uLjPXMPQ8Zq5k9ZPoC_Jq2yLyNCJyCsxd4oev1CX8oWmQpVzsy_SeCByDY/p.jpeg')",
        'gradient-blue': "url('https://previews.dropbox.com/p/thumb/AB5QTZMZfbgW82WNHXkpXPdcBeeKEYTHDaGGZ80nmBDfssDIjPbI9D2rxR0H07xt5eaN7y4UNP3H8EBaLRkQDoApPA-0GlNoeufgsfnxyyBqofFYuyLGyMlGEKvpC3oluz6UPjORtXYVu6A8a1H8VR3NHtWlFCkP12E-r-n4XqhVYaL2QPay4QsiwIYFwvL-hPSAnCoFK_JOisw7q9bL5GbR5voX1E6xXHgx49owrTUQR_VMaba8y07sc2nKKZqPdcYZ4ZOTzf6cBFo6l23h81UONPR_y5X0XloR5ZwRlZ_JtV3he-x0QEHwYs2CNp6yGZxGJ4bTXmX8Vh_srqasxmkh-bB5MLzcP2wZdYw625FSslVv_N1PZ83nHouDRhIlGRo/p.jpeg')",
        // hero
        'hero-home': "url('https://previews.dropbox.com/p/thumb/AB535EKglZgisQ7PIYxnL8vD-AG-Td3vVboBYkf-j6GL89mWqsdWFjHAjgaAz46mOoVECVWsnjP4EvS3G-U6uYlUaUWZHDNLeE9VP2L3YCxksw5GtEBfeSrZ-xl8IfI3ouh2P8oa7Jhou4C_aqRh0txHLvDOaM_y4SPg50W9liWxdbFuwYBmW5n9_ohgqEdh4vem331DVZLzxCzS4QJ3DGXQKNP8Dwu7O3bdDMBg04W56yez7LOb46fBYQsGptvFopJlCUBh8U7rrlz7qdKDdIXX9oHBP-7UNef2P_bpyPe2pqQcb3pFYu7g___4HQ1ifdJhBN4iPd6mTQDwNHgvBy9UKSVDN8m07XugWsHaW7RWLBptWoSaVrVXP3lgJWVKif0/p.png')",
        'hero-pets': "url('https://previews.dropbox.com/p/thumb/AB6Q4Rep5sOy9v5IyOvi327TyWCS7LAtRSzQ-paEJu03dmk5Ls-r0F_41QJwSqAbW9clZbX6ZvV4PP5ehwEXXcLzd2Q2E0O5Bhe8dde9p7kthM_SGPfOfb_i_eq6orbwEgwqcljQcCoasyfKRzxesC9jNEIoaUSOO7S_Gavkb0qx65FHZYwXzkMeoL-xAwvBy1RyT_En1qcE0YkOXo9AaaGYhzDDkKbs4q4S-5iJ6yCxseFspoNMDoKDWeZNOFyKsYzgVm1GQzSoDnC-X0zwMXyB_g-4zp4bXLxKN6w-XJqsnEs-B8ZOHis9yYcnrGCCS8EmioLu-UnJtU4DffxSpv1I2XFfdf08g2-e5wOU5hWhQZv0YH-bf36LkO3jyOEVx08/p.png')",
        'hero-adoption': "url('https://previews.dropbox.com/p/thumb/AB6vt3mgPaQdcytSXm6lkdcDrl4LR7SVR_ZJ_WdgjxMEvHeeVDeI3sbie3fNq4ku8uqVw85f6Ot37g4vYeGhvmJ765nBDNuCJnqHQezL6M4uUan0SQ4eK3yhY-srVCOyfePwHNls12uqVeSPI6AElFtFBIhY7s_kYdo6tkN0vBiJTObVJkycEcdUWWts_9peFfYhvjth-NAOeoFM7-L0eqlIFsc4d3H2vQgyUNvu1vEzey7JhKT_CjP-25cBNaZx1eIb6YWfU4VeODvV5VsGKlTsKwzpV49tEaErRIBVL0elILO6-_o43HjFcokzY8SRfF-T10aGh_puM4i2fFrBsSnUxbOyoGpp-mNErw8KP0FRX1WCexIcjjvUohR-ccwG3C4/p.png')",
        'hero-working-cats': "url('https://previews.dropbox.com/p/thumb/AB68M-o6feU7hSJLv5YUCiK7Yj_QFbkPj3ifa1_vC7ExPU72xx5ufzdtffVRK-9pTZkuHCisDmxFg9ZhjnGIB5rqJFgQsKGAxauwYsV-J24NEcVksNbchBeQSaw-k6YX6TlNsHpdPJFydCC2O69iXagz5vs2YsA3kG2Pcl_XK6uam88ky6fTsYFDeCwVb0c7UEcjYPope1YIIjwYG3A1HAztMBWXWaaXjup4iUpLNcFqNGaPdHPWjm7JpwU4W4OzIM06OBzQgGWxfTGycynxaBuZrsSCq4AN7MjcDI9lAsoEyayxh_HVRS6d-qpOSq-aCmBs95gTvg21fnACCvWiz6OPJagVJRvb2AWRhSkZG7GO-JtOxNe-QvZJQWTWOsHSLko/p.png')",
        'hero-foster-care': "url('https://previews.dropbox.com/p/thumb/AB7Toal4U6m29tLdbrKENjES7U5bP2Of3v8AI0859x1KhMQ-CCXBiUj6gUmdlX2yWWsnGG6o5NnZqNZZ1T7xKCmdvn7KII_JoBdMwf_EJiYEmDYUHvZPzM8Uc2PJ1utCDY8DOB8wqyWwgEqzDCzZ1u1WIo_LF2iCziqNOfZ6Yg7_JjnTzVXT-hraZ6UbjfUo_60KTL4hql5Q_qnS-eukZtumsHLQRN3HjF-3dnP1qAac2qI2b5lo1UXSk2DOgjPM78GO_KNfLLGraB7dbKaoEHikC4j3PIrSuC_OX-AKfVaRqjTRGDTcRcLRrje6Ee3rU-I9F1POFKeRDXNd3wtNK3ghMqtP_MwZ0CYGVu6QombbZAXLtrwUF3GkHGULnuZMvbU/p.png')",
        'hero-requirements': "url('https://previews.dropbox.com/p/thumb/AB59y6fw3oQkmfScZsX3YsfVCF4-fE3Vi5DMQk7m2SGSCOx8RqUOIn_0rUEnUKhgkks8WjDk1TqPjDLPnpkPMxrdJMwkG5atdSkQPpZxOLHMQ3nduKedyA1Myk1JunO74UVJ6SAym_FvL3gYMzBeL8eMvTOjEgfhM8XuVYFnLYxPFIKYtPh-TlrAgJW_xw0Ol9KbrsdTKvSbzRWD9mwFialCv5GqM_XSE63V4acMYZ5iVpcCejyYQlNzEoOIaNkxjNdVFeKw7mUvL5DnfN7yjcmI7v7bcnA3PagkUudBrgDX7gDL1d6SENweOsmVp4QdqM-Y8PJqwz30Pw9lAxarkoiBl9VnsBwdY97J9kkJRRwFHsEB702BIohxxVwivnHi-60/p.png')",
        'hero-education': "url('https://previews.dropbox.com/p/thumb/AB5Fe2s_4RL4xkKVhkWZs_fVnzwou6yAp6RB3EqvmIHXLWMJWpeEvNjqp3kVB3K-YY714dM3zelf94gvWyhfjuLuUQeLwzLtZH1tV7V6nlxRbyAfNWYiOv2unTjF2pizmnxA2yzG5J5S74NGYpzWtXkUU5bWLs8zAlHomCJJ-WJCAAgrX6hsmjjgfdgEmai8v7hhuRAAdKERb1v7h3XXYDTb62EJ8147zUfjIe0RXFsuh4aRBENkX6whxZdnu_MKUkpwlUfGPdPeu84JTp4ltsq5aSJQWVNZ3XYeLDnl3JSCYONJB1_4rCitNVttkzNi03rt7NcsjiqAA3_lXs9HehcWlRVpd9txFBkZlPlj7qopajszlMxPjEZUct0qdScwMDA/p.png')",

      }
    },
  },
  plugins: [],
};

// passive transparent
// hover rgba(173, 41, 92, 0.11)

// active #FFDBCC
// hover clicked rgba(173, 41, 92, 0.14)
// active passive #FFDBCC
// active clicked #FFDBCC