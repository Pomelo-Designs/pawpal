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
      dropShadow: {
        'fab-default': [
          '0 1px 3px rgba(0, 0, 0, 0.3)',
          '0 4px 8px rgba(0, 0, 0, 0.15)'
        ],
        'fab-hover': [
          '0 2px 3px rgba(0, 0, 0, 0.3)',
          '0 6px 10px rgba(0, 0, 0, 0.15)'
        ]
      },
      colors: {
        pink: {
          100: 'rgba(173, 41, 92, 0.11)',
          200: 'rgba(173, 41, 92, 0.14)',
          300: '#FFDBCC',
          600: "#CE4374",
          650: "#C0406E",
          700: "#B93E6B",
        },
        brown: {
          600: "#C2571D",
          650: "#B5521E",
          700: "#AE501F",
        },
        blue: {
          600: "#387ABF",
          650: "#3772B2",
          700: "#376DAC",
        }
      },
      backgroundImage: {
        'gradient-purple': "url('https://previews.dropbox.com/p/thumb/AB4M3yIZE73kpEmLYaOWr4gNEAPmJr4JbjNhFQUQP7aY9fsEVwx53wK-cIsNHM8pSDxE523pIzlfbKVAAn5q_XKJ3lMPFmv-PCDoojkpO9it87xyoBbo3rNXXi6dtGcuEH5YBR5s_QD1IkGRXymGkVtRaf3RYcvjVBtte7TL4Wp6WeSmAcCio_tN0OhLOieCRW2AaAAnr5ZCJb21C7aI2nT63OiXEq82V5PeFy_PIAe7ITI_HT7fBzIbAkfWPpc2efetuqBik0MMBXNdoUZnziNZcefwcdfI6lLI2PY1dn6en9_hbwx21XrhQobf1eBnuw6WCkvrVz9_3QsyQqu3m-c5hPgGKGp3yzRpn5WVhDrqIZqAD0KXtJpVP3fs4fALUjU/p.jpeg')",
        'gradient-orange': "url('https://previews.dropbox.com/p/thumb/AB6VnC7ahf5_mkKAwm5VroOnZR4DNtRR45D82GahQTc1qJprX77ct7sZPv7oBySFnbK643p5S8Tij9Nkm5dssXQA-DeEtnnb4fzgurCAauHrxmF5NTTJ_hO_yY1-bRnX-z3BEQtdSH-2FQatutu5F5IOyjFR7PNBzU7_uEJiuy_yq8RSEHI5XAaGxndkfEWbtY7iWzmVIAxjUCP3DsBV8SlBmcWySQi3wF2BTNto6zXnj6AmEmxZiW8wjrsHJ526cwPq2FQn9lL4HKr6eoF12yCGW_ZUxhYUXmaO3UIobZryCnKdiMj4AtKrXIr58FrafjzQbwVi0uLjPXMPQ8Zq5k9ZPoC_Jq2yLyNCJyCsxd4oev1CX8oWmQpVzsy_SeCByDY/p.jpeg')",
        'gradient-blue': "url('https://previews.dropbox.com/p/thumb/AB5QTZMZfbgW82WNHXkpXPdcBeeKEYTHDaGGZ80nmBDfssDIjPbI9D2rxR0H07xt5eaN7y4UNP3H8EBaLRkQDoApPA-0GlNoeufgsfnxyyBqofFYuyLGyMlGEKvpC3oluz6UPjORtXYVu6A8a1H8VR3NHtWlFCkP12E-r-n4XqhVYaL2QPay4QsiwIYFwvL-hPSAnCoFK_JOisw7q9bL5GbR5voX1E6xXHgx49owrTUQR_VMaba8y07sc2nKKZqPdcYZ4ZOTzf6cBFo6l23h81UONPR_y5X0XloR5ZwRlZ_JtV3he-x0QEHwYs2CNp6yGZxGJ4bTXmX8Vh_srqasxmkh-bB5MLzcP2wZdYw625FSslVv_N1PZ83nHouDRhIlGRo/p.jpeg')",
        'gradient-cyan': "url('https://previews.dropbox.com/p/thumb/AB5iJk_ACHE57qegaso90CSsUThpFW8EQ8da3Nm6sK-5pfD7M7wxqAA2PAUDybz37lC7ikgRNB1U0MaBqqTlYTbe99r3RJt-Tf3KRkF0Mkz7vKxIv47or1gxkvGwNYamT7yL8ouRDA2aqi7SR2gfT9Nl06uL671ThAJHpCdKzO2eNmLh9rICdznmJc22034FjUv18GqRodEdDRc97Mdd4CivSMQtxgLA-6kLTx3NnG-yB5VLJxY1JSBDQG63C3WsN-E_Em1sCs-LHf7RxqwGjKOks4RDUSej05xpzb4CXRsHOg4LUsh_dJ8A594eMGyVbEP80W4exl-1XoL4vPP05wEPS0hAR8r-yu40Bcgaq_suD_sPMPvPwi5pTiB6o6W4n-o/p.jpeg')",
        // home
        'home-adoption': "url('./assets/home-page/adopt.png')",
        'home-foster': "url('https://previews.dropbox.com/p/thumb/AB6afs2gSo76FYB9gnapsxOlF7h-vkbs7W7D4_bHyInjwcrpYRdVSCnkSoBZXjfJgkk-YBnnyV5J16_fimzLZpg4AK31A-gbGFqF5W_H9nqgbjZPSe2gUif2n06auTdALAaT1ErgE882O0scRUM_pbAcpaMC05lc5slRyaSRYtGmBy5X79Ivz5YXZHzsF3CxaNLuODZlZ8y99rgkUkcZurMh52GZTL13I38FZWcxIxKdO6OoEz_g6ohiRHM5BdwmJBCpOwMkudjDJRAMvznIeajp-xgYPmFHmJRBXbEt_cWofI7BsXgGgyK0_SUIbPEsnaogNDoEhpvm9-mOMb1PI8mYppLPjVfmzUIwcilzNOxAHndIp1drkNafy3P6zSEvqwg/p.png')",
        'home-working-cats': "url('https://previews.dropbox.com/p/thumb/AB4iwIlf1Aw28KqT_OxlTiugcdtjz9kHhjcYMPznLIG3P876rcJnXO4Us0Mw5J24cX9Xa5wCETJ_7mSSrpwEVFtZcv0VyXEtgNlpcYcYQjxi95joZrkhaNCwW4fB9n7VlkcOy5oCm0vDjX80LTiQQ63F0_2gGnnFl6Jb5WCqQSbJmJt4w51xs9fwOTZzcQo5aeu26x_ZpdNdZLBoSkH85dK942fIwBU0nPScYcvDH6z2vJMe-3kGyQ5k9keRnDFQamtA_vNIyaLEkIXPwjiOS2Wa5bwR0fmkKJMFLPDi_y4jXN-T2IL_tlnKmRWHsF86FV6zqkdVJVMXYYAeOfwA-mHqD8eV0hehuUQmhi7aVOatUYIhdf_fHAoJsQH6cNhJiXQ/p.png')",
        'home-news1': "url('https://previews.dropbox.com/p/thumb/AB5UA0ceFXqpNT3zJd-ENqq-4q_rOW6GPXQmdj-rIm5bTC87aAgFCEv5S15oUZfYyLXRM4k2KfICjKgPJk3xk5mmifOxteaDBOFi4tiuoxmytDTr0TtZbnVtxEsHOz7w5cZ_DG88DmF7QJroHFf4UYzAy03EV5S0C9Apma9O_HTwjiwCzZ9MN-eONR1y8pW3Y6H2UNowfCCALScgq7Q_BB0UDFTrAdV0k9LbrbqN2TU9i7vRGd5UBoufev9usZpuqlxzfp6v8dXGXBVx846sIrljF3xIm4ikXwrb2oFKLHYF8nmpq3Q3OVse84KFDn-TL2Gm8yR6XNZeUf8Dbmzb9kgEzjZTrV0Z6v0y9569eQ36HIx2b1kh_AOE-_EhuDPfuns/p.png')",
        'home-news2': "url('https://previews.dropbox.com/p/thumb/AB6NO2O8L_e-i-6bdRsjTwmsgT2G2bGDr_KP7yt9aBblpBKunaBM28AQ1EEwysAihEElXQ48pIJ63TDVMI9LWUk3fEXQVcTBP2TqCvgk88DEvWu0ebr9olVJf7WlXcgwtqkDhXaCJH6OgfxDbubVn8rSamam8XeKzIdB22O3kVXcSQSM2v8k_FRzf91d9lKK3d9DSPky46QcbLIYMU_J7H3FmJesy5t-BBwGf2X8jOTf_zwL7OOAx23YzjY2ETBHXAcmydpkEgDcTqCss6dfaYBhqeOFzdh4RNbxLxtjin0aHk0KCrKICsrw9zqVe-PY9BVzwyTChhQOwUOGSMZT4Fi25aMj7lrYR04gx3WGiYsPlgy_5shuhFmTxeS5uEo6-wE/p.png')",
        'home-news3': "url('https://previews.dropbox.com/p/thumb/AB4BHpnL22x5u00ioCu48DsMeogFgXzn1gzt-3W8hMv1_modCoRFKS0Rq12F5NyQW3XsevxLaCIUKDtfHp4ixZQBVr852ihekwwX_JgGwMsi628ylIy83WV9GCPmIvkeXR65tbBbpfu-Gu_09kg76SI7GAIgfVJ36umqqBtce1JBkJgxa2fkZy5OtWhVeBwPIXqgnStyDgv7Od5vz8ITmZT1hYlQC-dC0xm_O7-0V5pe0B0tC061eN_SgBUZGSngqkS0cv1H1jIC9sszcPxnV3V-Vb8EaJcCsTxg7SsnTLkM6K01HufLm_j17voZ_xrvmQDLLKMvwapMMMd8H1kADx7_GMteqA4uy_sao8D-GidDKvJCpz0doA_pjU_9kckOSJI/p.png')",
        'home-news4': "url('https://previews.dropbox.com/p/thumb/AB4bUlaHExlD72JH-edP2OCI5ZSY1mFrHXKVk1_lz6GdMWHTBdXuGboBFujI4GiNEI3TAkVDhJKp9FOZompoOyZssVr5JaaAOJsJjksR4qkcrjqOLLi6EHBh3kVuzYuYTe_P8gLi4B4V6Hl5ytmO0UGAK57ni8eqReA46aitMbmef0l3Keo0bKRYQY9phZa_3jdpr72QBjFl8RyQv-ILWZnza1J91lb2Isw-7o1NsIyegmsBLcdK8VmpDCTIfP0bxxaKLQBLDclFAHIklGw9pO99AQZ9jHaKovbPV5TpJ5kpHSi1I2uTraE8Ew7h9M0cl1jx0TtEL-O-gLfHApGvxYI9QI7r-fdh4AMuAmOMMOypRq6TR3nvfuyvozw6WtJCHZM/p.png')",

         // pets
        'pets-dogs': "url('https://previews.dropbox.com/p/thumb/AB4kjEHFxSzqtOzccW7qu8wLOJXZTu4Hpq6rOijIhoQq-OCN_BE85gOef6u3mZR2Wsf8qjxPOswpLNVs33c1FhfIx7F0q6nf7kMTBGR_LNXrkrjyNQU41E-GU3j8HakXIcORWftpgElqZ3SdeIOrmsAhW5guSTriBs1yr3GOcWlFccc6hpyKw5G_NFmuXAWPRLgDEbbvAX-ANjo_eOL8PERTz4MexgpcZg2ibTINtu8HVEtxaaS6fps-LohQ9pGrtYFpaMH8O7idbW8EWYghuszwso6xQxR_P_Qi-1t8W8CkNSLvhYFoEddgNJ5eH91l6gzQ2jYqfCudSXeQRM3NHrmFzwt8f7auUktGSl7QVNUHWXy_xdWwA1kO9luCcG9OshU/p.png')",
        'pets-cats': "url('https://previews.dropbox.com/p/thumb/AB6A-Tt_YhHOT-DE0fs152t_3AfLZXu-pmkd02MGwXhAsfcFDhdGZjkBK5Sv1br3pbulF9bp_GnN2EC9hDELAtKjaFIIbY48A6q4oXVOamwHFIFDvWDeDY3z4cO6cWrQlLLp5JrPihDc2YmYgMrKMxaOE1hpkGklQ6YG2W4OdgwMi90oXjvZT4lSFBik4-RiDQ6v_2AgMwLRHppdYXc5hRDcB-JO1q1RoWAMTxkFSjBbyqBKgJF8IF3xk-fqkL-V912iFBOvFgZK2b5Tuoq9dqUzap94hqs1dKVVFg6Ms7t9y__fldGAcozAPTiFnR_NY9jArUD8nyK3UcFkrX_ZEQJUyS4hIyNYmB6PoG8TiBpcDM2KEu6R16YUuSwOE6w22d0/p.png')",
        'pets-rodents': "url('https://previews.dropbox.com/p/thumb/AB6u01fAMRiDKEhP-Vfsh-Hq_9QXX-7MY7W7-LeEtJ9WfaRtBVWmla7QWv1FCUey2nEnPhnnH3XBbcduJFAhhGmsl6fTQlNX-TF1d6PWIKVf8-SE5FH2I1iRpglE3WvMAeYc2WA_ZLRpXXWxdXOdrtminHstftYGu4SPEYI0rjWbCBtX-1nVPdk4YkHt38BC6aV218bTKXByMYeAVi94KOfrpOgw2ZjUghefDR0YpIbkDIKLY__kj2zK7aKkZoz7FmZsvP_0yScZpaTk1ZS-y3mW9LciHcAKrm-IWVxvUQo2G0lnQmVJRIJ2zF7vA-B7qLLLNcQ0zeWqioJlRK26X6o8Mdh_rCKiP6qFtI3F786feEt3X25OSpdL-q3fX6crAlM/p.png')",
        'pets-birds': "url('https://previews.dropbox.com/p/thumb/AB6MsMY13qQvmUDKwmImfVpWgbhKMJYC3akhYTKAtaNEdhwlhKT0A034LVe2zMt80DGnG-sS1S9R24G63fQ4Gsxxxpw4QhaHw440zP7O_VxTEd7M5bJPbLnvzechQnvziIAwv9F0gCmbdAhgSLMgQTmkiilaWC7OOqHer7Kx4SN9sybwAVhAwZmgVNkESqVxmnTSChHE8rxXsFtzsVksTsE9YDd0BUv-4h0z73vZ4hLpfX3DJzX5VwLeiYuKy9dXo6cpDZ3k31VuZreBu8UtSbVebbtFYNr4ew46hnkE-H56sznVQ5bc_-Aj1XOe__vT0xTjm5Gd-WoyvgTy9M0ESxjd_GQN2QbRubxSUZTno-goH0DvNz2_NVgJdoIwksUsK24/p.png')",
        'pets-news1': "url('https://previews.dropbox.com/p/thumb/AB5Vk41SkwPxCFGf3mc971G61iGVB1FGd7OOizyr_XNzg5BgMEBSfki3ijNTlfLkqf5-DQWER1-fXOLrvzPlo8Bbwi3q_drznPAc3inbHuPmmTA5726XbHBlTPSBiLqrTP2WPUkfJq_a_-OtuEJaZZOTFNATuzxt6buKDsXsXn-3ZzX03Hwd_ynaHnw1IBan3wpqkh4ySXCMygUwtkaav9LM2M7sKtyqr7f8n1CNBmujMmI1IXd7eKe-c-MpriB6FpWAAypONUadBYDlDb3eag8l_jd8XcHIdVGaWO9BITldNeWGGAY37Ipn-ef0meyKuB07PYhu9IxwZEVHMYNdvy4knKJYlBt8vE6WRcS2uWPZk3DUPgp6ROc_yup_v9CKuNs/p.png')",
        'pets-news2': "url('https://previews.dropbox.com/p/thumb/AB6KSyyAO4IuoOGFybT7xpA1RN6n4nl7l5-vtHT6Kf8PWOIh96F1-fK_BMjacH5RWI7VA8oxjNhy6TYupAzUqmzd2H89N7zPR-U4rJ7zei-Z2YI8NRhrzZUprA37ugpWOWwdwwsdKHwZQstxS2Jc6QF5iIgs4BPju0RlBXay7yan2AZK_BLbLa2gyU75ka6sUScWWVxU0C6fMYqH7aqZxWd4uuIQCO9oY0Tlq7X1KQN8KbZRua-CO_bHhzgE68yQmhSiwfEfwmITlngpv9epuj0AgYosFl_oEyRrsjKIb-hDLQiBmDzc4NW4j0FIAbVhiPtYA99-PTEw-WytWR9KWnSLCKD1T8XDpDtOuloo9YjB-M9mA0GlSKgJZ_s5WsK9tcM/p.png')",
        'pets-news3': "url('https://previews.dropbox.com/p/thumb/AB7meq4pKGWTLRxDjKfvYfDpivttGangrYrjAXTkyjv3E9poMkd6oRpUDOSDMPu5CtOfmT5SpVWj2EDz1iAXGlnfW0-ktL1na3MU-OaWW1OkYQf2_K7BPBRql9HfwBIq66dkiB0MTS3IxEFifdQTtikvfl5B93EzPv5AgKReBk0buKtiUdNSPuj5Qzms1B8HS_E7XOcuCO9sVpXFedxCJwopYrm_UYaGF9Es6ryUHMZb9tjDnMuezFuAXByCO-lZUkddo2z5Ns6uXpsO5jzrasmQJUP5CBSsbeO86YQpXL4Eonna9zMYYIQPb9Hqb-6tjzs-IpW4j9k5FGHa493Z_oeKNrTOhnpHkOpp6lAeFWh9xbnqZT5O31wzMXgoMr24g7E/p.png')",
        'pets-news4': "url('https://previews.dropbox.com/p/thumb/AB5dUbXWXpesCU_kHNt8YYOcvB7MXbiywhKYi5p-h2Gg26WwWotMQ60Khy6O7-hsdXnF_lcvW9yMBQlgjBRYXx37P2B5cQRR22AFzRa-8YX1jCA08gr6tcgsCCdQIdxCs6-r4LQwzlUPAVr6jZZjUro11SE6A_zqzj2gcQgsG2pyOLxt4kZSAXFVBfAb587aiHnDOKoPOujDi7E7Dj5o-MfQThaN-TlU61MkXXu-XIKtRt8i5CnpwSuFK8Ofb2Fi_rOo51UubmGj1nxJmoFXzChlwuxuJnnG5tVIkpoqopW6T6XQ3HhEktFJSDXxsJhD77NVhoDw1QqDvzgUyuWrg5L-ADAAigafMAH8lRoJQgJz7YJBpC69wu6USRNw6vtl34M/p.png')",

        // hero
        'hero-home': "url('https://previews.dropbox.com/p/thumb/AB535EKglZgisQ7PIYxnL8vD-AG-Td3vVboBYkf-j6GL89mWqsdWFjHAjgaAz46mOoVECVWsnjP4EvS3G-U6uYlUaUWZHDNLeE9VP2L3YCxksw5GtEBfeSrZ-xl8IfI3ouh2P8oa7Jhou4C_aqRh0txHLvDOaM_y4SPg50W9liWxdbFuwYBmW5n9_ohgqEdh4vem331DVZLzxCzS4QJ3DGXQKNP8Dwu7O3bdDMBg04W56yez7LOb46fBYQsGptvFopJlCUBh8U7rrlz7qdKDdIXX9oHBP-7UNef2P_bpyPe2pqQcb3pFYu7g___4HQ1ifdJhBN4iPd6mTQDwNHgvBy9UKSVDN8m07XugWsHaW7RWLBptWoSaVrVXP3lgJWVKif0/p.png')",
        'hero-pets': "url('https://previews.dropbox.com/p/thumb/AB6Q4Rep5sOy9v5IyOvi327TyWCS7LAtRSzQ-paEJu03dmk5Ls-r0F_41QJwSqAbW9clZbX6ZvV4PP5ehwEXXcLzd2Q2E0O5Bhe8dde9p7kthM_SGPfOfb_i_eq6orbwEgwqcljQcCoasyfKRzxesC9jNEIoaUSOO7S_Gavkb0qx65FHZYwXzkMeoL-xAwvBy1RyT_En1qcE0YkOXo9AaaGYhzDDkKbs4q4S-5iJ6yCxseFspoNMDoKDWeZNOFyKsYzgVm1GQzSoDnC-X0zwMXyB_g-4zp4bXLxKN6w-XJqsnEs-B8ZOHis9yYcnrGCCS8EmioLu-UnJtU4DffxSpv1I2XFfdf08g2-e5wOU5hWhQZv0YH-bf36LkO3jyOEVx08/p.png')",
        'hero-adoption': "url('https://previews.dropbox.com/p/thumb/AB6vt3mgPaQdcytSXm6lkdcDrl4LR7SVR_ZJ_WdgjxMEvHeeVDeI3sbie3fNq4ku8uqVw85f6Ot37g4vYeGhvmJ765nBDNuCJnqHQezL6M4uUan0SQ4eK3yhY-srVCOyfePwHNls12uqVeSPI6AElFtFBIhY7s_kYdo6tkN0vBiJTObVJkycEcdUWWts_9peFfYhvjth-NAOeoFM7-L0eqlIFsc4d3H2vQgyUNvu1vEzey7JhKT_CjP-25cBNaZx1eIb6YWfU4VeODvV5VsGKlTsKwzpV49tEaErRIBVL0elILO6-_o43HjFcokzY8SRfF-T10aGh_puM4i2fFrBsSnUxbOyoGpp-mNErw8KP0FRX1WCexIcjjvUohR-ccwG3C4/p.png')",
        'hero-working-cats': "url('https://previews.dropbox.com/p/thumb/AB68M-o6feU7hSJLv5YUCiK7Yj_QFbkPj3ifa1_vC7ExPU72xx5ufzdtffVRK-9pTZkuHCisDmxFg9ZhjnGIB5rqJFgQsKGAxauwYsV-J24NEcVksNbchBeQSaw-k6YX6TlNsHpdPJFydCC2O69iXagz5vs2YsA3kG2Pcl_XK6uam88ky6fTsYFDeCwVb0c7UEcjYPope1YIIjwYG3A1HAztMBWXWaaXjup4iUpLNcFqNGaPdHPWjm7JpwU4W4OzIM06OBzQgGWxfTGycynxaBuZrsSCq4AN7MjcDI9lAsoEyayxh_HVRS6d-qpOSq-aCmBs95gTvg21fnACCvWiz6OPJagVJRvb2AWRhSkZG7GO-JtOxNe-QvZJQWTWOsHSLko/p.png')",
        'hero-foster-care': "url('https://previews.dropbox.com/p/thumb/AB7Toal4U6m29tLdbrKENjES7U5bP2Of3v8AI0859x1KhMQ-CCXBiUj6gUmdlX2yWWsnGG6o5NnZqNZZ1T7xKCmdvn7KII_JoBdMwf_EJiYEmDYUHvZPzM8Uc2PJ1utCDY8DOB8wqyWwgEqzDCzZ1u1WIo_LF2iCziqNOfZ6Yg7_JjnTzVXT-hraZ6UbjfUo_60KTL4hql5Q_qnS-eukZtumsHLQRN3HjF-3dnP1qAac2qI2b5lo1UXSk2DOgjPM78GO_KNfLLGraB7dbKaoEHikC4j3PIrSuC_OX-AKfVaRqjTRGDTcRcLRrje6Ee3rU-I9F1POFKeRDXNd3wtNK3ghMqtP_MwZ0CYGVu6QombbZAXLtrwUF3GkHGULnuZMvbU/p.png')",
        'hero-requirements': "url('https://previews.dropbox.com/p/thumb/AB59y6fw3oQkmfScZsX3YsfVCF4-fE3Vi5DMQk7m2SGSCOx8RqUOIn_0rUEnUKhgkks8WjDk1TqPjDLPnpkPMxrdJMwkG5atdSkQPpZxOLHMQ3nduKedyA1Myk1JunO74UVJ6SAym_FvL3gYMzBeL8eMvTOjEgfhM8XuVYFnLYxPFIKYtPh-TlrAgJW_xw0Ol9KbrsdTKvSbzRWD9mwFialCv5GqM_XSE63V4acMYZ5iVpcCejyYQlNzEoOIaNkxjNdVFeKw7mUvL5DnfN7yjcmI7v7bcnA3PagkUudBrgDX7gDL1d6SENweOsmVp4QdqM-Y8PJqwz30Pw9lAxarkoiBl9VnsBwdY97J9kkJRRwFHsEB702BIohxxVwivnHi-60/p.png')",
        'hero-education': "url('https://previews.dropbox.com/p/thumb/AB5Fe2s_4RL4xkKVhkWZs_fVnzwou6yAp6RB3EqvmIHXLWMJWpeEvNjqp3kVB3K-YY714dM3zelf94gvWyhfjuLuUQeLwzLtZH1tV7V6nlxRbyAfNWYiOv2unTjF2pizmnxA2yzG5J5S74NGYpzWtXkUU5bWLs8zAlHomCJJ-WJCAAgrX6hsmjjgfdgEmai8v7hhuRAAdKERb1v7h3XXYDTb62EJ8147zUfjIe0RXFsuh4aRBENkX6whxZdnu_MKUkpwlUfGPdPeu84JTp4ltsq5aSJQWVNZ3XYeLDnl3JSCYONJB1_4rCitNVttkzNi03rt7NcsjiqAA3_lXs9HehcWlRVpd9txFBkZlPlj7qopajszlMxPjEZUct0qdScwMDA/p.png')",
        'hero-services': "url('https://previews.dropbox.com/p/thumb/AB6Dv4C28nx764cB2e_CNPQmr4lSCCbrH_uLm-8HezOXOJ8mSe7RhPZcyKZ6cNL1PhfERoEjceQwYMmsa1ztHMaYOWCJS0Wgyqcc0D37U5vD8TU8n6d3fKONJHIW9yXalv8O-Fy3rKGclocZiHz-8dvp85m4a3L-fZSEm-kwiKUO4EZjMG8GgS4xXOAI_XZ4xtckXRceYFrfa2BLXhWIJf2pq3XAX3jw0PNnrfR5zdzR68AgbecMBWOmKdql5Py1AwoClMuJx42jcB5YpKVARLWntZbAi7FuKalllzCd-XdNjuoptY1yiJBxT_O_LYalU-9mN3eTINZHfealDucQv1c25-1uXkALOi5m1xe5loVZJC_dttn0DL2jw9v_lnDhluU/p.png')",
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