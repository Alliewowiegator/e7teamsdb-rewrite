import mongoose from "mongoose";

const CompositionSchema = new mongoose.Schema({
    userInfo: {
        type: {
            username: { type: String },
            server: { type: String },
        },
    },
    teamInfo: {
        type: {
            teamType: { type: String },
            teamDescription: { type: String },
        },
    },
    heroes: {
        type: [
            {
                id: { type: String },
                necklaceStat: { type: String },
                ringStat: { type: String },
                bootStat: { type: String },
                name: { type: String },
                attack: { type: Number },
                defense: { type: Number },
                health: { type: Number },
                speed: { type: Number },
                criticalHitChance: { type: String },
                criticalHitDamage: { type: String },
                effectiveness: { type: String },
                effectResistance: { type: String },
                dualAttackChance: { type: String },
                artifact: { type: String },
                artifactLevel: { type: Number },
                imprintLevel: { type: String },
                imprintType: { type: String },
                awakeningLevel: { type: String },
                setEffect1: { type: String },
                setEffect2: { type: String },
                setEffect3: { type: String }
            },
        ],
    },
});

const Composition = mongoose.models.Composition || mongoose.model('Composition', CompositionSchema);
export default Composition;
