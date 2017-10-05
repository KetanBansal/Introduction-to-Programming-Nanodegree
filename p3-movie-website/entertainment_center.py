import fresh_tomatoes
import media

toy_story = media.Movie("Toy Story",
                        "A story of boy and his toys that came to his life",
                        "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg",
                        "https://www.youtube.com/watch?v=KYz2wyBy3kc")

avatar = media.Movie("Avatar",
                     "A marine on an alien planet",
                     "https://upload.wikimedia.org/wikipedia/en/b/b0/Avatar-Teaser-Poster.jpg",
                     "https://www.youtube.com/watch?v=5PSNL1qE6VY")

despicable_me = media.Movie("Despicable Me",
                            "When a criminal mastermind uses a trio of orphan girls as pawns for a grand scheme, he finds their love is profoundly changing him for the better. ",
                            "https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Despicable_Me_Poster.jpg/220px-Despicable_Me_Poster.jpg",
                            "https://www.youtube.com/watch?v=TZkAcKCFIVo")

kung_fu_panda = media.Movie("Kung Fu Panda",
                            "The Dragon Warrior has to clash against the savage Tai Lung as China's fate hangs in the balance: However, the Dragon Warrior mantle is supposedly mistaken to be bestowed upon an obese panda who is a tyro in martial arts. ",
                            "https://upload.wikimedia.org/wikipedia/en/thumb/7/76/Kungfupanda.jpg/220px-Kungfupanda.jpg",
                            "https://www.youtube.com/watch?v=PXi3Mv6KMzY")

madagascar = media.Movie("Madagascar",
                        "Spoiled by their upbringing and unaware of what wildlife really is, four animals from the New York Central Zoo escape, unwittingly assisted by four absconding penguins, and find themselves in Madagascar. ",
                        "https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Madagascar_Theatrical_Poster.jpg/220px-Madagascar_Theatrical_Poster.jpg",
                        "https://www.youtube.com/watch?v=_FvCgabQVjA")

hotel_transylvania = media.Movie("Hotel Transylvania",
                                "Dracula, who operates a high-end resort away from the human world, goes into overprotective mode when a boy discovers the resort and falls for the count's teen-aged daughter.",
                                "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/HotelTransylvania.jpg/220px-HotelTransylvania.jpg",
                                "https://www.youtube.com/watch?v=FYgzizpCTKU")


movies = [toy_story, avatar, despicable_me, kung_fu_panda, madagascar, hotel_transylvania]
fresh_tomatoes.open_movies_page(movies)



