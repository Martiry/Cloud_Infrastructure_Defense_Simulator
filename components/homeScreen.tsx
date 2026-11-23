'use client'

import { useState } from "react"
import { Box, Button } from "@mui/material"
import GamePage from "./gamePage"
import LeaderBoard from "./leaderBoard"
import Tutorial from "./tutorial"


export default function HomeScreen() {
    const [showGame, setShowGame] = useState(false)
    const [showTutorial, setShowTutorial] = useState(false)
    const [showLeaderboard, setShowLeaderboard] = useState(false)

    if (showGame) {
        return (
            <Box>
                <Button onClick={() => setShowGame(false)}>
                    Back
                </Button>
                <GamePage />
            </Box>
        )
    }

    if (showTutorial) {
        return (
            <Box>
                <Button onClick={() => setShowTutorial(false)}>
                    Back
                </Button>
                <Tutorial />
            </Box>
        )
    }

    if (showLeaderboard) {
        return (
            <Box>
                <Button onClick={() => setShowLeaderboard(false)}>
                    Back
                </Button>
                <LeaderBoard />
            </Box>
        )
    }

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
            <Box
                sx={{
                    border: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    p: 3,
                    width: 300
                }}>
                <Button variant="contained" onClick={() => setShowGame(true)}>
                    Play
                </Button>
                <Button variant="contained" onClick={() => setShowTutorial(true)}>
                    Tutorial
                </Button>
                <Button variant="contained" onClick={() => setShowLeaderboard(true)}>
                    Leaderboard
                </Button>
            </Box>
        </Box>
    )
}
