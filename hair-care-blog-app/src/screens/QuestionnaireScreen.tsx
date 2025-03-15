import React, { useState } from 'react';
import { View, Text, Button, Image, ScrollView } from 'react-native';

const QuestionnaireScreen = () => {
    const [answers, setAnswers] = useState({});
    const questions = [
        {
            id: 1,
            question: "What is your hair type?",
            options: ["Straight", "Wavy", "Curly", "Coily"],
            illustration: require('../assets/illustrations/hair-type.png'),
        },
        {
            id: 2,
            question: "How often do you wash your hair?",
            options: ["Daily", "Every other day", "Weekly", "Rarely"],
            illustration: require('../assets/illustrations/wash-frequency.png'),
        },
        {
            id: 3,
            question: "What is your primary hair concern?",
            options: ["Dryness", "Frizz", "Damage", "Scalp Issues"],
            illustration: require('../assets/illustrations/hair-concern.png'),
        },
    ];

    const handleAnswerSelect = (questionId, option) => {
        setAnswers({ ...answers, [questionId]: option });
    };

    const handleSubmit = () => {
        // Logic to process answers and navigate to results
    };

    return (
        <ScrollView>
            <View>
                {questions.map((q) => (
                    <View key={q.id}>
                        <Image source={q.illustration} />
                        <Text>{q.question}</Text>
                        {q.options.map((option) => (
                            <Button
                                key={option}
                                title={option}
                                onPress={() => handleAnswerSelect(q.id, option)}
                            />
                        ))}
                    </View>
                ))}
                <Button title="Submit" onPress={handleSubmit} />
            </View>
        </ScrollView>
    );
};

export default QuestionnaireScreen;